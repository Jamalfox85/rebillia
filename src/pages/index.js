import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import IndexHero from "../components/INDEX_HERO/indexhero"
import IndexFeatures from "../components/INDEX_FEATURES/IndexFeatures"
import IndexSocialProof from "../components/INDEX_SOCIALPROOF/IndexSocialProof"
import IndexReviews from "../components/INDEX_REVIEWS/IndexReviews"
import IndexCTABanner from "../components/INDEX_CTABANNER/IndexCTABanner"
import Index_mainfunctions from "../components/INDEX_MAINFUNCTIONS/Index_mainfunctions"
import IndexStatistics from "../components/INDEX_STATISTICS/IndexStatistics"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <IndexHero />
    <Index_mainfunctions />
    <IndexFeatures />
    <IndexStatistics />
    <IndexSocialProof />
    <IndexReviews />
    <IndexCTABanner />
  </Layout>
)

export default IndexPage
