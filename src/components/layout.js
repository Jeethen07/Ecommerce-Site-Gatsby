/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import "./bootstrap.min.css"
import "./layout.css"
import Navbar from "./Reuseable/Navbar"

const Layout = ({ children }) => (
  <div className="bg-theme">
    <Navbar />
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
