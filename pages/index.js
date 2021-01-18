import React from 'react'
import { gql, useQuery } from '@apollo/client'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Cards from '../containers/Cards'

const Home = () => {
  const GET_SONGS = gql`
    query GetSongs {
      songs {
        id
        title
        artistId
        artistName
      }
    }
  `

  const { loading, error, data } = useQuery(GET_SONGS)

  if (loading) return <div>Loading...</div>
  if (error) {
    console.log(error)
    return <div>Error...</div>
  }

  const { songs } = data

  return (
    <Layout>
      <Cards songs={songs} />
    </Layout>
  )
}

export default Home
