const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        name: String!
        phoneNumber: String!
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
        users: [User]
        user(phoneNumber: String!): User
    }
    type Mutation {
        login(phoneNumber: String!, password: String!): Auth
        addUser(name: String!, phoneNumber: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;