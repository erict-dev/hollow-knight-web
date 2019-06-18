/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/layout.css"
import "../styles/main.css"
import "../styles/buy.css"
import "../styles/team-cherry.css"

import ESRB from "../images/logos/esrb.png"
import Unity from "../images/logos/unity.png"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <footer>
            <img src={ESRB} style={{ width: 180, height: 'auto' }}/>
            <img src={Unity} style={{ width: 180, height: 'auto' }}/>
            <a href="#">Contact Us</a>
            <a href="#">Hollow Knight Press Kit</a>
            <div>
              Hollow Knight is © Copyright {new Date().getFullYear()} Team Cherry
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
