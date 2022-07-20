import { client } from 'graphql/client'

import { GetCharactersQuery } from 'graphql/generated/graphql'
import { GET_CHARACTERS } from 'graphql/queries'

import HomeTemplate from 'templates/Home'

export default function Home() {
  return <HomeTemplate />
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
