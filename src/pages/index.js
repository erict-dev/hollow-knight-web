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
          <div className="ftb-description">Beneath the fading town of Dirtmouth sleeps a vast, ancient kingdom. Many are drawn beneath the surface, searching for riches, or glory, or answers to old secrets.</div>
          <div className="ftb-description">As the enigmatic Hollow Knight, you’ll traverse the depths, unravel its mysteries and conquer its evils.</div>
        </div>
      </div>
    </div>

    <div className="full-background-image" style={{ backgroundImage: `url(${WhiteBg})`}}>
      <div className="ftb-container-reversed">
        <div className="floating-transparent-box">
          <div className="ftb-title">Use Your Skills and Reflexes to Survive</div>
          <div className="ftb-description">Hollow Knight is a challenging 2D action-adventure. You’ll explore twisting caverns, battle tainted creatures and escape intricate traps, all to solve an ancient long-hidden mystery.</div>
          <ul>
            <li>Explore vast, Inter-connected Worlds</li>
            <li>Encounter a bizarre collection of friends and foes</li>
            <li>Evolve with powerful new skills and abilities</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="full-background-image" style={{ backgroundImage: `url(${GreenBg})`}}>
      <div className="ftb-container">
        <div className="floating-transparent-box">
          <div className="ftb-title">Evocative Hand-Drawn Art</div>
          <div className="ftb-description">The world of Hollow Knight is brought to life in vivid, moody detail, its caverns alive with bizarre and terrifying creatures, each animated by hand in a traditional 2D style.</div>
          <div className="ftb-description">Every new area you’ll discover is beautifully unique and strange, teeming with new creatures and characters to discover. The world of Hollow Knight is one worth exploring just to take in the sights and discover new wonders hidden off of the beaten path.</div>
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
