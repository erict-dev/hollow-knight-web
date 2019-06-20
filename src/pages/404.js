import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div className="not-found-page">
      <h1 style={{ color: 'white' }}>Whoops, this page does not exist.</h1>
      <p style={{color: 'white' }}>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>

  </Layout>
)

export default NotFoundPage
