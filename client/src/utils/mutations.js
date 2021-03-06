import { gql } from "@apollo/client";

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
  mutation addUser($phoneNumber: String!, $name: String!, $password: String!) {
    addUser(phoneNumber: $phoneNumber, name: $name, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const SAVE_DOG = gql`
  mutation saveDog($input: saveDogData) {
    saveDog(input: $input) {
      _id
      name
      phoneNumber
      dogCount
      savedDogs {
        image
        breed
        characteristics
        life_span
        weight
        dogId
      }
    }
  }
`;

export const REMOVE_DOG = gql`
  mutation removeDog($dogId: ID!) {
    removeDog(dogId: $dogId) {
      _id
      name
      dogCount
      savedDogs {
        dogId
        image
        breed
        characteristics
        life_span
        weight
      }
    }
  }
`;