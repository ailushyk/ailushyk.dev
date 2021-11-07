import { client } from '@/lib/apollo/apollo-client'
import { gql } from '@apollo/client'
import { PostService } from '@/lib/api/postsService'
import { Locales } from '@/lib/constants'

const postsQuery = gql`query allPosts {
  allPosts(sortBy:meta_firstPublicationDate_DESC) {
    edges {
      node {
        _meta{
          uid
          lang
          firstPublicationDate
        }
      }
    }
  }
}`

const sortedPostsQuery = gql`query sortedPosts($locale: String) {
  allPosts(lang:$locale, sortBy:meta_firstPublicationDate_DESC) {
    edges {
      node {
        title
        _meta{
          uid
          firstPublicationDate
        }
      }
    }
  }
}`

const postDataQuery = gql`query post($slug: String, $lang: String) {
  allPosts(uid:$slug, lang: $lang) {
    edges {
      node {
        title
        content
        _meta{
          uid
          firstPublicationDate
        }
      }
    }
  }
}`

const getPostsPaths = async() => {
  const { data } = await client.query({ query: postsQuery, })
  return data.allPosts.edges.map(({ node: { _meta: meta } }) => {
    return {
      params: {
        slug: meta.uid,
        locale: Locales[meta.lang]
      },
    }
  })
}

const getSortedPostsData = async({ locale }) => {
  const { data } = await client.query({
    query: sortedPostsQuery,
    variables: {
      locale,
    },
  })
  return data.allPosts.edges
}

const getPostData = async({ slug, locale }) => {
  const { data } = await client.query({
    query: postDataQuery,
    variables: { slug, lang: locale },
  })
  return data.allPosts.edges[0]
}

export const postsPrismicService: PostService = {
  getPostsPaths,
  getSortedPostsData,
  getPostData,
}