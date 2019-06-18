import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BuyBg from "../images/hk-buy-bg.jpg"
import SoundtrackBg from "../images/hk-soundtrack-bg.jpg"

const BuyPage = () => (
  <Layout>
    <SEO title="Page two" />

    <div className="full-background-image" style={{ backgroundImage: `url(${BuyBg})`}}>
    </div>

    <div className="full-background-image" style={{ backgroundImage: `url(${SoundtrackBg})`}}>
    </div>

  </Layout>
)

export default BuyPage
