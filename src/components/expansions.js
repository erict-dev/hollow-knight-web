import React from "react"

import HiddenDreams from "../images/expansions/dreams.jpg"
import Grimm from "../images/expansions/grimm.jpg"
import Lifeblood from "../images/expansions/lifeblood.jpg"
import Godmaster from "../images/expansions/godmaster.jpg"


const Expansions = () => (
    <div className="expansion-section">

      <div id="hidden-dreams" className="expansion-image" style={{ backgroundImage: `url(${HiddenDreams})`}}>
        <div className="expansion-text-container">
          <div className="expansion-title">Hidden Dreams</div>
          <div className="expansion-description">Mighty new foes emerge!</div>
          <ul>
            <li>New Boss Fights</li>
            <li>New Upgrades</li>
            <li>New Music</li>
          </ul>
        </div>
      </div>

      <div id="the-grimm-troupe" className="expansion-image" style={{ backgroundImage: `url(${Grimm})`}}>
        <div className="expansion-text-container">
          <div className="expansion-title">The Grimm Troupe</div>
          <div className="expansion-description">Light the Nightmare Lantern. Summon the Troupe.</div>
          <ul>
            <li>New Major Quest</li>
            <li>New Boss Fights</li>
            <li>New Charms</li>
            <li>New Enemies</li>
            <li>New Friends</li>
          </ul>
        </div>
      </div>

      <div id="lifeblood" className="expansion-image" style={{ backgroundImage: `url(${Lifeblood})`}}>
        <div className="expansion-text-container">
          <div className="expansion-title">Lifeblood</div>
          <div className="expansion-description">A Kingdom Upgraded! Tweaks and Refinements across the whole game.</div>
          <ul>
            <li>New Boss</li>
            <li>Upgraded Bosses</li>
          </ul>
        </div>
      </div>

      <div id="godmaster" className="expansion-image" style={{ backgroundImage: `url(${Godmaster})`}}>
        <div className="expansion-text-container">
          <div className="expansion-title">Godmaster</div>
          <div className="expansion-description">Take your place amongst the Gods.</div>
          <ul>
            <li>New Characters and Quest</li>
            <li>New Boss Fights</li>
            <li>Epic New Music!</li>
          </ul>
        </div>
      </div>

    </div>

)
export default Expansions
