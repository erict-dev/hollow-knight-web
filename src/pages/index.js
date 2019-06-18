import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import LandingScreen from "../components/landing-screen"
import Accolades from "../components/accolades"
import Expansions from "../components/expansions"
import PurchaseBar from "../components/purchase-bar"
import FriendsBar from "../components/friends-bar"

import PurpleBg from "../images/purple-bg.jpg"
import WhiteBg from "../images/white-bg.jpg"
import GreenBg from "../images/green-bg.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <LandingScreen />

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

    <Accolades />

    <div className="section-title-bar">
      <div className="section-title">
        Hollow Knight Expands with 4 Giant Free Content Packs
      </div>
    </div>
    <Expansions />

    <PurchaseBar />

    <FriendsBar />

  </Layout>
)

export default IndexPage
