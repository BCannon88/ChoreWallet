// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    choreCount: Int
    chores: [Chore]
  }

  type Chore {
    _id: ID
    choreText: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    chores(username: String): [Chore]
    chore(_id: ID!): Chore
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addChore(choreText: String!): Chore
  }
`;

// export the typeDefs
module.exports = typeDefs;