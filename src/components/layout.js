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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

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
          <main>
            {children}
          </main>
          <footer>
            <img src={ESRB} style={{ width: 180, height: 'auto' }}/>
            <a href="https://unity.com/madewith/hollow-knight" target="_blank" rel="noopener noreferrer"><img src={Unity} style={{ width: 180, height: 'auto' }}/></a>

            <a href="mailto:press@teamcherry.com.au" target="_blank" rel="noopener noreferrer">Contact Us</a>
            <a href="https://drive.google.com/drive/folders/0BzxIOSR3fQW2clhnY012ZDk3ZVE" target="_blank" rel="noopener noreferrer">Hollow Knight Press Kit</a>

            <div className="social-links">
              <a href="https://www.facebook.com/teamcherrygames/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="lg"/></a>
              <a href="https://twitter.com/TeamCherryGames" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="lg"/></a>
              <a href="https://www.youtube.com/channel/UCZS2K8ZsUmujTuj3cNMyBSA" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} size="lg"/></a>
            </div>

            <div style={{ fontSize: '0.8em' }}>
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
