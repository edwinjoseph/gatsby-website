import React from "react"

import Layout from "global/Layout"
import SEO from "global/SEO"

import Hero from "shared/Hero";
import Form from "shared/Form";

const Components = ({ items, path }) => {
  return items.map(({ type }, idx) => {
    switch (type) {
      case 'hero':
        return <Hero key={idx} path={path} idx={idx} />
      case 'form':
        return <Form key={idx} path={path} idx={idx} />
      default:
        console.warn(`Unable to find component for "${type}"`);
        return null;
    }
  })
}

const Pages = ({ pageContext: { components }, path }) => (
  <Layout>
    <SEO />
    <Components items={components} path={path} />
  </Layout>
)

export default Pages
