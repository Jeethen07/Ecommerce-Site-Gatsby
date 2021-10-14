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

    {/* <HeroSection
      title="i write code"
      img={data.img.childImageSharp.fluid}
      subtitle="learncodeonline.com"
      heroclass="hero-background"
    /> */}
    {/* <InfoBlock heading="About Us" /> */}
    <CourseCart books={data.books} />
    {/* <DualInfoBlock
      heading="Our Team"
      img="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"
    /> */}
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
