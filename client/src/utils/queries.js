import gql from 'graphql-tag';

export const QUERY_CHORE = gql`
  query chores($email: String) {
    chores(email: $email) {
      _id
      name
      description
      price
      choreLocation
    }
  }
`;

export const QUERY_CHORES = gql`
  query chores($id: ID!) {
    chores(_id: $id) {
      _id
      name
      description
      price
      choreLocation
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