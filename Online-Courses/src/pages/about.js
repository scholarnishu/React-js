import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/infoblock"
import Dualinfoblcok from "../components/Reusable/Dualinfoblcok"
import TeamPhotoSection from "../components/About/TeamPhotoSection"

const AboutPage = ({data}) => (
  <Layout>
  <SEO title="Home" />
    <HeroSection 
    img={data.img.childImageSharp.fluid}
    title="About Learn Code Online"
    subtitle=""
    heroclass="hero-baclground"
    />
    <Dualinfoblcok heading="A message from CEO" />
    <Infoblock heading="About Vision"/>
    <TeamPhotoSection />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
         ...GatsbyImageSharpFluid_tracedSVG
      }
     }
    }
}
`
export default AboutPage
