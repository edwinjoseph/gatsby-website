import React from "react"

import Container from "global/Container"
import Link from "atoms/Link"

import "./Footer.scss"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="Footer">
      <Container>
        © Edwin Joseph {currentYear}, Built with <Link href="https://www.gatsbyjs.org" target="_blank">Gatsby</Link>
      </Container>
    </footer>
  )
}

export default Footer
