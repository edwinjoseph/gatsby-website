import React from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby"
import getComponentProps from '../helpers/get-component-props'

import Section from "global/Section"

const Form = ({ idx, path }) => {
  const { pagesComponentYaml } = useStaticQuery(graphql`
    query FormQuery {
      pagesComponentYaml(type: "form") {
        idx
        path
        props {
          that
        }
      }
    }
  `)

  const props = getComponentProps(path, idx, pagesComponentYaml);

  if (!props) {
    return null
  }

  return (
    <Section>
      Form:
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </Section>
  )
}

Form.propTypes = {
  that: PropTypes.string.isRequired,
}

export default Form
