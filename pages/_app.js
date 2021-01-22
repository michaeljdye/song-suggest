import { ApolloProvider } from '@apollo/client'
import client from '../utils/apolloClient'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
