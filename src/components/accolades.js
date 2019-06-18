import React from "react"

import HkReviewsBg from "../images/hk-reviews-bg.jpg"
import AwardLogos from "../images/award-logos.png"

const Accolades = () => (
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

)
export default Accolades
