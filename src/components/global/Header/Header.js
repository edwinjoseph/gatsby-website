import React from "react"
import PropTypes from "prop-types"

import Container from "global/Container"
import Link from "atoms/Link"

import "./Header.css"

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
