import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/default-image"
import SEO from "../components/seo"

import TeamCherryLogo from "../images/team-cherry-logo.png"
import HollowKnightLogo from "../images/hollow-knight-logo.png"

import NewCityShot from "../images/new_city_shot.jpg"

import PurpleBg from "../images/purple-bg.jpg"
import WhiteBg from "../images/white-bg.jpg"
import GreenBg from "../images/green-bg.jpg"

import HkReviewsBg from "../images/hk-reviews-bg.jpg"

import AwardLogos from "../images/award-logos.png"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="full-background-image" style={{ backgroundImage: `url(${NewCityShot})`}}>
      <div className="hero-container">
        <div id="team-cherry-logo" style={{ backgroundImage: `url(${TeamCherryLogo})`}}></div>
        <div id="hollow-knight-logo" style={{ backgroundImage: `url(${HollowKnightLogo})`}}></div>
        <a href="#"><div className="hk-transparent-button">Watch Trailer</div></a>
      </div>
    </div>

    <div className="full-background-image" style={{ backgroundImage: `url(${PurpleBg})`}}>
      <div className="ftb-container">
        <div className="floating-transparent-box">
          <div className="ftb-title">Brave the depths of a forgotten kingdom</div>
          <div className="ftb-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          </div>
        </div>
      </div>
    </div>

    <div className="full-background-image" style={{ backgroundImage: `url(${WhiteBg})`}}>
      <div className="ftb-container-reversed">
        <div className="floating-transparent-box">
          <div className="ftb-title">Brave the depths of a forgotten kingdom</div>
          <div className="ftb-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          </div>
        </div>
      </div>
    </div>

    <div className="full-background-image" style={{ backgroundImage: `url(${GreenBg})`}}>
      <div className="ftb-container">
        <div className="floating-transparent-box">
          <div className="ftb-title">Brave the depths of a forgotten kingdom</div>
          <div className="ftb-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          </div>
        </div>
      </div>
    </div>

    <div className="full-background-image" style={{ backgroundImage: `url(${HkReviewsBg})`}}>
      <div className="ftb-container">
        <div className="accolades-container">

          <div className="accolade">
            <div className="accolades-description">“It’s a deep dive into a dark place, and a brilliantly rich experience.“</div>
            <div className="accolades-title">9/10 - Game Informer</div>
          </div>

          <div className="accolade">
            <div className="accolades-description">“It’s a deep dive into a dark place, and a brilliantly rich experience.“</div>
            <div className="accolades-title">9/10 - Game Informer</div>
          </div>

          <div className="accolade">
            <div className="accolades-description">“It’s a deep dive into a dark place, and a brilliantly rich experience.“</div>
            <div className="accolades-title">9/10 - Game Informer</div>
          </div>

          <img src={AwardLogos} style={{ maxWidth: 380 }}/>

        </div>
      </div>
    </div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
