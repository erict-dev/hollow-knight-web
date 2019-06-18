import React from "react"

import NewCityShot from "../images/new_city_shot.jpg"
import TeamCherryLogo from "../images/team-cherry-logo.png"
import HollowKnightLogo from "../images/hollow-knight-logo.png"

const LandingScreen = () => (
    <div className="full-background-image" style={{ backgroundImage: `url(${NewCityShot})`}}>
      <div className="hero-container">
        <div id="team-cherry-logo" style={{ backgroundImage: `url(${TeamCherryLogo})`}}></div>
        <div id="hollow-knight-logo" style={{ backgroundImage: `url(${HollowKnightLogo})`}}></div>
        <a href="#"><div className="hk-transparent-button">Watch Trailer</div></a>
      </div>
    </div>

)
export default LandingScreen