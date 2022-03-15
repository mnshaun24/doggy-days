import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($phoneNumber: String!, $password: String!) {
    login(phoneNumber: $phoneNumber, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($password: String!) {
    addUser(password: $password) {
      token
      user {
        _id

      }
    }
  }
`;