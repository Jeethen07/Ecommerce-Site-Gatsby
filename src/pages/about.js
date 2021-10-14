import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HeroSection from "../components/Reuseable/HeroSection"
import Seo from "../components/seo"
import InfoBlock from "../components/Reuseable/InfoBlock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import TeamPhotoSection from "../components/About/TeamPhotoSection"

const AboutPage = ({ data }) => (
  <Layout>
    <Seo title="About" />
    <HeroSection
      title="About Learn Code Online"
      img={data.img.childImageSharp.fluid}
      subtitle=""
      heroclass="about-background"
    />
    <DualInfoBlock
      heading="Our Team"
      img="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"
    />
    <TeamPhotoSection />
    <InfoBlock heading="About Our Vision" />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
