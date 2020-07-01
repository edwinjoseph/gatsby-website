import React from "react"

import Layout from "global/Layout"
import SEO from "global/SEO"
import Section from "global/Section"

import "./global.css"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Section guttered>
      <h1>Hey, I'm an Engineer</h1>
      <p>I currently do the codes for Wonderbly</p>
    </Section>
  </Layout>
)

export default IndexPage
