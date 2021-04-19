import { ApolloClient, InMemoryCache } from '@apollo/client'
import { PrismicLink } from 'apollo-link-prismic'

// TODO: move to env
export const prismicGraphqlURI = 'https://ailushyk-home-page.prismic.io/graphql'

const client = new ApolloClient({
  link: PrismicLink({
    uri: prismicGraphqlURI,
  }),
  cache: new InMemoryCache(),
})

export { client }