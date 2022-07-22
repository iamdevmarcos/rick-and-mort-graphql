import { client } from 'graphql/client'
import { GET_CHARACTERS } from 'graphql/queries'

import { HomeProps } from 'types/home'
import { GetCharactersQuery } from 'graphql/generated/graphql'

import HomeTemplate from 'templates/Home'

export default function Home({ characters }: HomeProps) {
  return <HomeTemplate characters={characters} />
}

export const getStaticProps = async () => {
  const { characters } = await client.request<GetCharactersQuery>(
    GET_CHARACTERS
  )

  return {
    revalidate: 60,
    props: {
      characters: characters?.results
    }
  }
}
