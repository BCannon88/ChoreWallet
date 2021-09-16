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
    name: String!
    description: String
    price: Float
    choreLocation: ChoreLocation
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    choreLocations: [ChoreLocation]
    chores:(location: ID, name: String): [Chore]
    user: User
    order(_id: ID!): Order
    # checkout(chores: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(chores: [ID]!): Order
    login(email: String!, password: String!): Auth
  }
`;

// export the typeDefs
module.exports = typeDefs;