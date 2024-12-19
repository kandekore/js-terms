import { gql } from "@apollo/client";

export const GET_ALL_CONCEPTS = gql`
  query GetAllConcepts {
    getAllConcepts {
      term
      description
    }
  }
`;
