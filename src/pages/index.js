import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import HeroSection from "../components/Reuseable/HeroSection"
import Seo from "../components/seo"
// import InfoBlock from "../components/Reuseable/InfoBlock"
// import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import CourseCart from "../components/Cart/CourseCart"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Book Mart" />
    <CourseCart books={data.books} />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
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
