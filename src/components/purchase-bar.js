import React from "react"

import "../styles/purchase-bar.css"

import Switch from "../images/logos/switch.png"
import PS4 from "../images/logos/ps4.png"
import Xbox from "../images/logos/xbox.png"
import Steam from "../images/logos/steam.png"
import Gog from "../images/logos/gog.png"
import HumbleStore from "../images/logos/humble-store.png"

const PurchaseBar = () => (
  <div className="section-title-bar">
    <div className="section-title" style={{ marginBottom: 12 }}>
      Purchase Hollow Knight Now
    </div>
    <div className="purchase-logos-container">
      <div className="purchase-logo-group">
        <a href="https://www.nintendo.com/games/detail/hollow-knight-switch" target="_blank"><div className="purchase-logo" style={{ backgroundImage: `url(${Switch})`}}/></a>
        <a href="https://store.playstation.com/en-us/product/UP1822-CUSA13632_00-HOLLOWKNIGHT18US" target="_blank"><div className="purchase-logo" style={{ backgroundImage: `url(${PS4})`}}/></a>
      </div>
      <div className="purchase-logo-group">
        <a href="https://www.microsoft.com/en-us/p/hollow-knight-voidheart-edition/9mw9469v91lm" target="_blank"><div className="purchase-logo" style={{ backgroundImage: `url(${Xbox})`}}/></a>
        <a href="https://store.steampowered.com/app/367520/Hollow_Knight/" target="_blank"><div className="purchase-logo" style={{ backgroundImage: `url(${Steam})`}}/></a>
      </div>
      <div className="purchase-logo-group">
        <a href="https://www.gog.com/game/hollow_knight" target="_blank"><div className="purchase-logo" style={{ backgroundImage: `url(${Gog})`}}/></a>
        <a href="https://www.humblebundle.com/store/hollow-knight" target="_blank"><div className="purchase-logo" style={{ backgroundImage: `url(${HumbleStore})`}}/></a>
      </div>
    </div>
  </div>
)
export default PurchaseBar
