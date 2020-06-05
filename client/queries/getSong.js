import gql from 'graphql-tag'

export default gql`
  query getSongTitle($id: ID!) {
    song(id: $id) {
      title
    }
  }
`
