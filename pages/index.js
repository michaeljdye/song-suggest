import React from 'react'
import { gql, useQuery } from '@apollo/client'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Cards from '../containers/Cards'

const Home = () => {
  const GET_CATEGORIES = gql`
    query GetCategories {
      categories {
        id
        name
      }
    }
  `

  const { loading, error, data } = useQuery(GET_CATEGORIES)

  if (loading) return <div>Loading...</div>
  if (error) {
    console.log(error)
    return <div>Error...</div>
  }

  const { categories } = data

  return (
    <Layout>
      <Cards categories={categories} />
    </Layout>
  )
}

export default Home
