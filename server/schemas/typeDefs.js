const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        name: String!
        phoneNumber: Int!
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        users: [User]
        user(phoneNumber: Int!): User
    }
    type Mutation {
        login(phoneNumber: Int!, password: String!): User
        addUser(name: String!, phoneNumber: Int!, password: String!): User
    }
`;

module.exports = typeDefs;