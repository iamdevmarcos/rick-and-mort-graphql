import { GraphQLClient } from 'graphql-request'

const API_BASE_URL = 'https://rickandmortyapi.com/graphql'

export const client = new GraphQLClient(API_BASE_URL)
