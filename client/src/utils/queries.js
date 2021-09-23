import gql from 'graphql-tag';

export const QUERY_CHORES = gql`
  query chores {
    chores {
      _id
      name
      description
      price
      choreLocation
      {
        _id
        name
      }
    }
  }
`;

export const QUERY_CHORE = gql`
  query chore($id: ID!) {
    chores(_id: $id) {
      _id
      name
      description
      price
      choreLocation
      {
        _id
        name
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      firstName
      lastName
      email
      chores {
        _id
        name
        description
        price
        choreLocation
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      firstName
      lastName
      email
      chores {
        _id
        name
        description
        price
        choreLocation
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      firstName
      lastName
      email
      chores {
        _id
        name
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;