import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      name
      phoneNumber
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

export const QUERY_DOGS = gql`
  query dogs($breed: String) {
    dogs{breed: $breed) {
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
