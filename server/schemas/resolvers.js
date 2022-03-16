const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');

const resolvers = {
  Query: {

  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
    }
  }
}