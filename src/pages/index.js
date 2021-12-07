import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import IndexHero from "../components/INDEX_HERO/indexhero"
import IndexFeatures from "../components/INDEX_FEATURES/IndexFeatures"
import IndexSocialProof from "../components/INDEX_SOCIALPROOF/IndexSocialProof"
import IndexReviews from "../components/INDEX_REVIEWS/IndexReviews"
import IndexCTABanner from "../components/INDEX_CTABANNER/IndexCTABanner"
import IndexMainFunctions from "../components/INDEX_MAINFUNCTIONS/IndexMainFunctions"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <IndexHero />
    <IndexMainFunctions />
    <IndexFeatures />
    {/* <IndexStatistics /> */}
    <IndexSocialProof />
    <IndexReviews />
    <IndexCTABanner />
  </Layout>
)

export default IndexPage
