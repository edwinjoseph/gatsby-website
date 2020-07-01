import React from "react"
import PropTypes from "prop-types"
import { Link as RouteTo } from "gatsby"

import "./Link.css"

const Link = ({ to, href, target, children }) => {
  if (!to && !href) {
    return null;
  }
  if (!to) {
    return <a href={href} target={target} className="Link">{children}</a>
  }
  return <RouteTo to={to} className="Link">{children}</RouteTo>
}

Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Link
