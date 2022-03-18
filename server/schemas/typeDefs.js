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
        me: User
        users: [User]
        user(phoneNumber: Int!): User
    }
    type Mutation {
        login(phoneNumber: Int!, password: String!): Auth
        addUser(name: String!, phoneNumber: Int!, password: String!): Auth
    }
`;

module.exports = typeDefs;