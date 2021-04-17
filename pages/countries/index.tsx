import React from 'react'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
})

export const getStaticProps = async() => {
  const { data } = await client.query({
    query: gql`
        query Countries {
          countries {
            code
            name
            emoji
          }
        }
      `,
  })

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  }
}

const Countries = ({ countries }) => {
  return (
    <div>
      <h1>Countries</h1>
      <div>
        {countries.map((country) => (
          <div key={country.code}>
            <h3>{country.name}</h3>
            <p>
              {country.code} - {country.emoji}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Countries