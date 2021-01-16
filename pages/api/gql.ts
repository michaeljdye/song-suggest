// @ts-ignore
import { ApolloServer, gql } from 'apollo-server-micro'
import { User } from './models/user'

const typeDefs = gql`
  type Query {
    users: [User!]!
    categories: [Category!]!
    search: Search!
  }

  # type Mutation {
  #   addArtist(artist: ArtistInput): Artist!
  #   updateArtist(artist: ArtistInput): Artist!
  # }

  type User {
    id: Int
    name: String
    email: String
  }

  input UserInput {
    id: Int
    name: String
    email: String
    password: String
  }

  type Category {
    href: String,
    icons: [Icon]
    id: String,
    name: String,
  }

  type Icon {
    height: Int
    url: String
    width: Int
  }

  type Search {
    href: String
  }
`

const resolvers = {
  Query: {
    users: async (parent: any, args: any, context) => {
      try {
        const users = await User.findAll({raw: true, attributes: {exclude: ['createdAt', 'updatedAt']},
        })

        return users
      } catch (error) {
        console.log(error)
        return error.toString
      }
    },
    categories: async (parent: any, args: any, context) => {
      const { access_token } = context

      try {        
        const endpoint = '/browse/categories'
        
        const categoryResponse = await fetch(`${process.env.SPOTIFY_API}${endpoint}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })

        const categoryData = await categoryResponse.json()
        
        return categoryData.categories.items
      } catch (error) {
        console.log(error)
        
        return error.toString
      }
    },
    search: async (parent: any, args: any, context) => {
      const { access_token } = context
      const endpoint = '/search'
      // const { query } = args
      const query = 'q=killswitch%20engage&type=artist'

      try {
        const response = await fetch(`${process.env.SPOTIFY_API}${endpoint}?${query}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        })
        const data = await response.json()

        return {href: 'hi'}

      } catch (error) {
        console.log(error)
      }
    }
  },
  /* Mutation: {
    updateArtist: async (
      parent: any,
      { artist: { id, name, genre } },
      context: any
    ) => {
      try {
        const response = await client.query({
          text: 'UPDATE artists SET name=$1, genre=$2 WHERE id = $3',
          values: [name, genre, id],
        })
        return { id: 1, name: 'hi', genre: 'yo' }
      } catch (error) {
        return error.toString()
      }
    },
    addArtist: async (
      parent: any,
      { artist: { name, genre } },
      context: any
    ) => {
      try {
        const response = await client.query({
          text: 'INSERT INTO artists(name, genre) VALUES($1, $2) RETURNING *',
          values: [name, genre],
        })

        const [artist] = response.rows

        return artist
      } catch (error) {
        return error.toString()
      }
    },
  }, */
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => {
      const credentials = Buffer.from(`${process.env.SPOTIFY_ID}:${process.env.SPOTIFY_SECRET}`).toString('base64')
 
      const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${credentials}`,
        },
        body: 'grant_type=client_credentials'
      })
      
      const { access_token } = await tokenResponse.json()

      return { access_token }
  }
})

export default apolloServer.createHandler({ path: '/api/gql' })

export const config = {
  api: {
    bodyParser: false,
  },
}
