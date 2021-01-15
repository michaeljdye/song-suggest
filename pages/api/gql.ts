// @ts-ignore
import { ApolloServer, gql } from 'apollo-server-micro'
const { Sequelize, DataTypes } = require("sequelize");

// connect to db
const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
  }
)

// test db
async function testDB() {
  try {
    await db.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

testDB()

// set up model
const Artist = db.define("artist", {
  name: DataTypes.TEXT,
  genre: DataTypes.TEXT
});

const typeDefs = gql`
  type Query {
    artists: [Artist!]!
  }

  type Mutation {
    addArtist(artist: ArtistInput): Artist!
    updateArtist(artist: ArtistInput): Artist!
  }

  type Artist {
    id: Int
    name: String
    genre: String
  }

  input ArtistInput {
    id: Int
    name: String
    genre: String
  }
`

const resolvers = {
  Query: {
    artists: async (parent: any, args: any, context) => {
      try {
        const artists = await Artist.findAll({raw: true, attributes: {exclude: ['createdAt', 'updatedAt']},
        })

        return artists
      } catch (error) {
        return error.toString
      }
    },
  },
  Mutation: {
    updateArtist: async (
      parent: any,
      { artist: { id, name, genre } },
      context: any
    ) => {
      try {
 /*        const response = await client.query({
          text: 'UPDATE artists SET name=$1, genre=$2 WHERE id = $3',
          values: [name, genre, id],
        })
        return { id: 1, name: 'hi', genre: 'yo' } */
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
      /*   const response = await client.query({
          text: 'INSERT INTO artists(name, genre) VALUES($1, $2) RETURNING *',
          values: [name, genre],
        })

        const [artist] = response.rows

        return artist */
      } catch (error) {
        return error.toString()
      }
    },
  },
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
})

export default apolloServer.createHandler({ path: '/api/gql' })

export const config = {
  api: {
    bodyParser: false,
  },
}
