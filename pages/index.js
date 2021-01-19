import React, { useState } from 'react'
import { gql, useQuery, useLazyQuery } from '@apollo/client'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Cards from '../containers/Cards'
import SearchForm from '../containers/SearchForm'

const Home = () => {
  const [query, setQuery] = useState('')

  const GET_SONGS = gql`
    query GetSongs($artist: String) {
      songs(artist: $artist) {
        id
        title
        artistId
        artistName
      }
    }
  `

  const [search, { loading, data, error }] = useLazyQuery(GET_SONGS, {
    variables: {
      artist: 'hi',
    },
  })

  return (
    <Layout>
      <SearchForm search={search} setQuery={setQuery} query={query} />
      {data && <Cards songs={data.songs} />}
    </Layout>
  )
}

export default Home
