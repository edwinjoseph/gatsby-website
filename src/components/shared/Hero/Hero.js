import React from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby"
import getComponentProps from '../helpers/get-component-props'

import Section from "global/Section"

const Hero = ({ idx, path }) => {
  const { pagesComponentYaml } = useStaticQuery(graphql`
    query HeroQuery {
      pagesComponentYaml(type: "hero") {
        idx
        path
        props {
          this
        }
      }
    }
  `)

  const props = getComponentProps(path, idx, pagesComponentYaml);

  return (
    <Section>
      Hero:
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </Section>
  )
}

Hero.propTypes = {
  this: PropTypes.string.isRequired,
}

export default Hero
