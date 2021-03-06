// @ts-ignore
import { ApolloServer, gql } from 'apollo-server-micro'
import { User } from './models/user'

const typeDefs = gql`
  type Query {
    users: [User!]!
    songs(artist: String): [Song!]!
  }

  type Mutation {
    addUser(user: UserInput): User!
  }

  type User {
    id: Int
    name: String
    email: String
  }

  input UserInput {
    name: String
    email: String
    password: String
  }

  type Song {
    id: Int,
    title: String,
    artistId: Int,
    artistName: String
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
    songs: async (parent: any, args: any, context) => {
      /* const { access_token } = context
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
        const data = await response.json() */

        const { artist } = args

        if (!artist) return null

        try {
          const endpoint = `/a/ra/songs.json?pattern=${artist.toLowerCase()}`

          const response = await fetch(`${process.env.SONGSTER_API}${endpoint}`)
          const data = await response.json()

          const songs = data.map(({id, title, artist: {id: artistId, name: artistName}}) => ({id, title, artistId, artistName}))

          return songs
          
        } catch (error) {
          console.log(error)
        }
  


      // } catch (error) {
      //   console.log(error)
      // }
    }
  },
  Mutation: {
    addUser: async (
      parent: any,
      { user },
      context: any
    ) => {
      
      try {
        const data = await User.create(user)
        delete data['password']
        delete data['updatedAt']
        delete data['createdAt']

        return data.toJSON()
      } catch (error) {
        return error.toString()
      }
    },
  },
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
