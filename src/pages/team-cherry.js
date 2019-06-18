import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TeamCherryLogo from "../images/team-cherry-logo.png"

import Ari from "../images/team/ari.png"
import William from "../images/team/william.png"
import David from "../images/team/david.png"

const TeamCherryPage = () => (
  <Layout>
    <SEO title="Page two" />

    <div className="team-cherry-section">

      <div className="team-cherry-header-container">
        <div id="team-cherry-page-logo" style={{ backgroundImage: `url(${TeamCherryLogo})`}}></div>
        <div className="team-cherry-description">Hollow Knight is being developed by Team Cherry in Adelaide, South Australia. We're a team of 3 people who, alongside making the game, are responsible for building these websites, cutting those game trailers, posting regular game updates, answering questions on social media and much more. Though it's a lot of work, we love doing it and it's made even more enjoyable by the enthusiastic support we've received from fans this whole way.</div>
      </div>

      <div className="team-cherry-team-container">
        <div className="team-cherry-team-profile">
          <div className="team-cherry-team-photo" style={{ backgroundImage: `url(${Ari})`}}/>
          <div className="team-cherry-team-title">Ari Gibson</div>
          <div className="team-cherry-team-description">Ari is responsible for game design alongside William. He creates the game's art, environments and animates hundreds of bugs.</div>
        </div>

        <div className="team-cherry-team-profile">
          <div className="team-cherry-team-photo" style={{ backgroundImage: `url(${William})`}}/>
          <div className="team-cherry-team-title">William Pellen</div>
          <div className="team-cherry-team-description">William designs the game along with Ari. He creates the enemy, boss and game behaviour for Hollow Knight. If an enemy seems too challenging or a gauntlet insurmountable, blame him!</div>
        </div>

        <div className="team-cherry-team-profile">
          <div className="team-cherry-team-photo" style={{ backgroundImage: `url(${David})`}}/>
          <div className="team-cherry-team-title">David Kazi</div>
          <div className="team-cherry-team-description">Dave was responsible for Hollow Knight's technical direction. He divided his time between making the game run and fixing things that Ari and William broke.</div>
        </div>

      </div>


    </div>

  </Layout>
)

export default TeamCherryPage
