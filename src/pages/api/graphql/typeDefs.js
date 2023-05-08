const {gql} = require('apollo-server-express');

const typeDefs = gql`

    type User {
        id: ID!
        email: String!
        password: String!
        nick: String!
        type: String!

    }

    type AuthData {
        token: String!
        email: String!
        nick: String!
        type: String!
        expiresIn: String!
    }

    type Query {
        getUsers(email: String): [User!]
    }

    type Mutation {
        login(email: String!, password: String!): AuthData!
        createUser(email: String!, password: String!, nick: String!): User!
    }

`;

module.exports = { typeDefs };