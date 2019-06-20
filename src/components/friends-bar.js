import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import FangamerImage from "../images/logos/fangamer.png"
import YeteeImage from "../images/logos/the-yetee.png"
import GhostRampImage from "../images/logos/ghost-ramp.png"

import "../styles/friends-bar.css"

const FriendsBar = () => (
    <div className="section-title-bar bordered-section-title-bar">
      <div className="section-title">
        Visit Our Friends
      </div>

      <div className="friends-logos-container">
        <div className="friends-box">
          <div className="friends-logo" style={{ backgroundImage: `url(${FangamerImage})`}}/>
          <div className="friends-description">Plush Grubs! Plush Knights! Rad Tees and so much more!</div>
          <a href="https://www.fangamer.com/collections/hollow-knight" target="_blank" rel="noopener noreferrer"><div className="friends-button">Browse Cool Merch!</div></a>
        </div>

        <div className="friends-box">
          <div className="friends-logo" style={{ backgroundImage: `url(${YeteeImage})`}}/>
          <div className="friends-description">Classy Tees! Stylish Pins! The coolest, friendliest yetee we know!</div>
          <a href="https://theyetee.com/collections/hollow-knight" target="_blank" rel="noopener noreferrer"><div className="friends-button">Check Out the Range!</div></a>
        </div>

        <div className="friends-box">
          <div className="friends-logo" style={{ backgroundImage: `url(${GhostRampImage})`}}/>
          <div className="friends-description">Limited Vinyl Releases!</div>
          <a href="https://ghost-ramp.myshopify.com/collections/videogames" target="_blank" rel="noopener noreferrer"><div className="friends-button">All the Details!</div></a>
        </div>

      </div>

    </div>
)

export default FriendsBar
