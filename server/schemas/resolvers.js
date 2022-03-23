const { User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate({ path: "savedDogs", populate: { path: "savedDogs" } });

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    //get all users
    users: async () => {
      return User.find().select("-__v -password");
    },
    // get a user by username
    user: async (parent, { phoneNumber }) => {
      return User.findOne({ phoneNumber }).select("-__v -password");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { phoneNumber, password }) => {
      const user = await User.findOne({ phoneNumber });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    saveDog: async (parent, args, context) => {
      console.log(context.user, args, "save dog please be working");
      if (context.user) {
        const updateUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedDogs: args.input } },
          { new: true }
        );
        return updateUser;
      }
    },
    removeDog: async (parent, args, context) => {
        console.log(context.user, args, "remove dog please work!");
        if(context.user) {
            const updateUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                {$pull: {savedDogs: {dogId: args.dogId}}},
                {new: true}
            )
            return updateUser;
        }
        throw new AuthenticationError('You must be logged in.')
    }
  },
};

module.exports = resolvers;
