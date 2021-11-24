import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import IndexHero from "../components/INDEX_HERO/indexhero"
import IndexFeatures from "../components/INDEX_FEATURES/IndexFeatures"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <IndexHero />
    <IndexFeatures/>
  </Layout>
)

export default IndexPage
