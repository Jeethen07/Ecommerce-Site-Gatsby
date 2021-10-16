import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CourseCart from "../components/Cart/CourseCart"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Book Mart" />
    <CourseCart books={data.books} />
  </Layout>
)

export const query = graphql`
  {
    books: allContentfulBooks {
      edges {
        node {
          id
          title
          author
          price
          image {
            fixed(width: 300, height: 400) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
