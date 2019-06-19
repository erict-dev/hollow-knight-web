import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BuyBg from "../images/hk-buy-bg.jpg"
import SoundtrackBg from "../images/hk-soundtrack-bg.jpg"

import HollowKnightLogo from "../images/hollow-knight-logo.png"

import Switch from "../images/logos/switch.png"
import PS4 from "../images/logos/ps4.png"
import Xbox from "../images/logos/xbox.png"
import Steam from "../images/logos/steam.png"
import Gog from "../images/logos/gog.png"
import HumbleStore from "../images/logos/humble-store.png"

import Bandcamp from "../images/logos/bandcamp.png"
import Albums from "../images/albums.jpg"

const BuyPage = () => (
  <Layout>
    <SEO title="Page two" />

    <div className="full-background-image" style={{ backgroundImage: `url(${BuyBg})`}}>

      <div className="buy-drawer">
        <div id="hk-buy-logo" style={{ backgroundImage: `url(${HollowKnightLogo})`}} />
        <div className="buy-divider" />
        <div className="buy-text">Buy Now On</div>
        <div className="buy-logos-group">
          <a href="https://www.nintendo.com/games/detail/hollow-knight-switch" target="_blank"><div className="purchase-logo" style={{ backgroundImage: `url(${Switch})`}}/></a>
          <a href="https://store.playstation.com/en-us/product/UP1822-CUSA13632_00-HOLLOWKNIGHT18US" target="_blank"><div className="purchase-logo" style={{ backgroundImage: `url(${PS4})`}}/></a>
          <a href="https://www.microsoft.com/en-us/p/hollow-knight-voidheart-edition/9mw9469v91lm" target="_blank"><div className="purchase-logo" style={{ backgroundImage: `url(${Xbox})`}}/></a>
          <a href="https://store.steampowered.com/app/367520/Hollow_Knight/" target="_blank"><div className="purchase-logo" style={{ backgroundImage: `url(${Steam})`}}/></a>
          <a href="https://www.gog.com/game/hollow_knight" target="_blank"><div className="purchase-logo" style={{ backgroundImage: `url(${Gog})`}}/></a>
          <a href="https://www.humblebundle.com/store/hollow-knight" target="_blank"><div className="purchase-logo" style={{ backgroundImage: `url(${HumbleStore})`}}/></a>

        </div>
      </div>
    </div>


      <div className="full-background-image soundtrack-info-container" style={{ backgroundImage: `url(${SoundtrackBg})`}}>
        <div className="ftb-container-reversed">
          <div className="floating-transparent-box-soundtrack">

            <div className="albums" style={{ backgroundImage: `url(${Albums})`}} />

            <div className="soundtrack-cta-title">Purchase the Official Soundtrack</div>
            <div className="ftb-title">A Haunting Orchestral Score</div>
            <div className="ftb-description">Composed and produced by Christopher Larkin, Hollow Knight's epic score is woven throughout the game, echoing the sadness of a majestic civilisation brought to ruin.</div>

            <div className="soundtrack-cta-container">
              Buy now on <a href="https://christopherlarkin.bandcamp.com/album/hollow-knight-original-soundtrack" target="_blank"><span id="bandcamp" style={{ backgroundImage: `url(${Bandcamp})`}}></span></a>
            </div>

          </div>
        </div>
      </div>


    </Layout>
    )

    export default BuyPage
