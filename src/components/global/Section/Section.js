import React from "react"
import PropTypes from "prop-types"
import Container from "global/Container"

const Section = ({ guttered, children }) => {
  let inner = children;

  if (guttered) {
    inner = (
      <Container>
        {children}
      </Container>
    )
  }

  return (
    <section className="Section">
      {inner}
    </section>
  )
}

Section.propTypes = {
  guttered: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Section
