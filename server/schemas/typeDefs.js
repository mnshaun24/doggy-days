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
    type Dog {
        image: String
        breed: String
        characteristics: String
        life_span: String
        weight: String
    }
    input saveDogData {
        image: String
        breed: String
        characteristics: String
        life_span: String
        weight: String
    }
    type Mutation {
        login(phoneNumber: Int!, password: String!): Auth
        addUser(name: String!, phoneNumber: Int!, password: String!): Auth
        saveDog(input: saveDogData): User
    }
`;

module.exports = typeDefs;