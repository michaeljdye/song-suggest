import React, { useState } from 'react'
import { gql, useQuery, useLazyQuery } from '@apollo/client'
import styled from '@emotion/styled'
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
    <HomeS>
      <SearchForm search={search} setQuery={setQuery} query={query} />
      {data && <Cards songs={data.songs} />}
    </HomeS>
  )
}

const HomeS = styled.div`
  form {
    display: block;
    margin: 1.5rem 0;
    text-align: center;
  }
`

export default Home
