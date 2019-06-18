import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TeamCherryLogo from "../images/team-cherry-logo.png"

const TeamCherryPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="team-cherry-section">
      <div className="team-cherry-header-container">
        <div id="team-cherry-page-logo" style={{ backgroundImage: `url(${TeamCherryLogo})`}}></div>
        <div className="team-cherry-description">Hollow Knight is being developed by Team Cherry in Adelaide, South Australia. We're a team of 3 people who, alongside making the game, are responsible for building these websites, cutting those game trailers, posting regular game updates, answering questions on social media and much more. Though it's a lot of work, we love doing it and it's made even more enjoyable by the enthusiastic support we've received from fans this whole way.</div>
      </div>
    </div>
  </Layout>
)

export default TeamCherryPage
