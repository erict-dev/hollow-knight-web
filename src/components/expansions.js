import React from "react"

import HiddenDreams from "../images/expansions/dreams.jpg"
import Grimm from "../images/expansions/grimm.jpg"
import Lifeblood from "../images/expansions/lifeblood.jpg"
import Godmaster from "../images/expansions/godmaster.jpg"


const Expansions = () => (
    <div className="expansion-section">

      <div className="expansion-image" style={{ backgroundImage: `url(${HiddenDreams})`}}>
        <div className="expansion-text-container">
          <div className="expansion-title">Hidden Dreams</div>
          <div className="expansion-description">Take your place amongst the Gods.</div>
          <ul>
            <li>New Major Quest</li>
            <li>New Boss Fights</li>
            <li>New Charms</li>
            <li>New Enemies</li>
            <li>New Friends</li>
          </ul>
        </div>
      </div>

      <div className="expansion-image" style={{ backgroundImage: `url(${Grimm})`}}>
        <div className="expansion-text-container">
          <div className="expansion-title">Hidden Dreams</div>
          <div className="expansion-description">Take your place amongst the Gods.</div>
          <ul>
            <li>New Major Quest</li>
            <li>New Boss Fights</li>
            <li>New Charms</li>
            <li>New Enemies</li>
            <li>New Friends</li>
          </ul>
        </div>
      </div>

      <div className="expansion-image" style={{ backgroundImage: `url(${Lifeblood})`}}>
        <div className="expansion-text-container">
          <div className="expansion-title">Hidden Dreams</div>
          <div className="expansion-description">Take your place amongst the Gods.</div>
          <ul>
            <li>New Major Quest</li>
            <li>New Boss Fights</li>
            <li>New Charms</li>
            <li>New Enemies</li>
            <li>New Friends</li>
          </ul>
        </div>
      </div>

      <div className="expansion-image" style={{ backgroundImage: `url(${Godmaster})`}}>
        <div className="expansion-text-container">
          <div className="expansion-title">Hidden Dreams</div>
          <div className="expansion-description">Take your place amongst the Gods.</div>
          <ul>
            <li>New Major Quest</li>
            <li>New Boss Fights</li>
            <li>New Charms</li>
            <li>New Enemies</li>
            <li>New Friends</li>
          </ul>
        </div>
      </div>

    </div>

)
export default Expansions
