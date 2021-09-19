// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    chores: [Chore]
  }

  type Chore {
    _id: ID
    name: String
    description: String
    price: Int
    choreLocation: ChoreLocation
  }

  type ChoreLocation {
    _id: ID
    name: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    chores(email: String): [Chore]
    chore(_id: ID!): Chore
    choreLocations: [ChoreLocation]
    choreLocation(_id: ID!): ChoreLocation
    users: [User]
    user(_id: ID!): User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

// export the typeDefs
module.exports = typeDefs;