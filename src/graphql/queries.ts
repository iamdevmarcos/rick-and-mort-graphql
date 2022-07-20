import { gql } from 'graphql-request'

export const GET_CHARACTERS = gql`
  fragment getResults on Characters {
    results {
      name
      image
      species
      location {
        name
      }
    }
  }

  query getCharacters {
    characters {
      ...getResults
    }
  }
`
