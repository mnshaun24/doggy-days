const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
    users: [User]
    user(phoneNumber: String!): User
  }
  type User {
    _id: ID
    name: String!
    phoneNumber: String!
    dogCount: Int
    savedDogs: [Dog]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Dog {
    image: String
    breed: String
    characteristics: String
    life_span: String
    weight: String
    dogId: String
  }
  input saveDogData {
    image: String
    breed: String
    characteristics: String
    life_span: String
    weight: String
    dogId: String
  }
  type Mutation {
    login(phoneNumber: String!, password: String!): Auth
    addUser(name: String!, phoneNumber: String!, password: String!): Auth
    saveDog(input: saveDogData): User
    removeDog(dogId: ID!): User
  }
`;

module.exports = typeDefs;
