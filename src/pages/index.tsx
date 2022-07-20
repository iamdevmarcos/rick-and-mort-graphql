import { client } from 'graphql/client'

import { GetCharactersQuery } from 'graphql/generated/graphql'
import { GET_CHARACTERS } from 'graphql/queries'

import Main from '../components/Main'

export default function Home() {
  return <Main />
}

export const getStaticProps = async () => {
  const { characters } = await client.request<GetCharactersQuery>(
    GET_CHARACTERS
  )

  return {
    props: {
      characters: characters?.results
    }
  }
}
