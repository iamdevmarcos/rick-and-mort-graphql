import { gql } from 'graphql-request'

export const GET_CHARACTERS = gql`
  fragment getResults on Characters {
    results {
      name
      image
      species
    }
  }

  query getCharacters {
    characters {
      ...getResults
    }
  }
`
