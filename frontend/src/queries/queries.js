import { gql } from 'apollo-boost';

const getToasters = gql`
{
  toasters {
    nodes {
      id
      title
      content
      slug
    }
  }
}
`
const getToasterBySlug = gql`
query getToasterBySlug($slug:String){
  toaster: toastersBy(uri: $slug){
    title
    content
    toasterMeta{
      price
      weight
    }
  }
}
`

export {getToasters, getToasterBySlug}