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
        user: User!
    }

    type Query {
    login(email: String!, password: String!): AuthData!
    }

`;

module.exports = { typeDefs };