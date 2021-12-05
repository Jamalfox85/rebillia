import React, { useState } from "react"
import "./IndexFeatures.css"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons"

const IndexFeatures = () => {
  const featureTitles = [
    "Recurring Offerings",
    "Popular Purchases",
    "Customer Lifecycles",
    "Detailed Reporting",
  ]
  const featureImages = [
    <StaticImage alt="online payments" src="../../Assets/onlinepayments.png" />,
    <StaticImage
      alt="popular purchases"
      src="../../Assets/popularpurchases.png"
    />,
    ,
    <StaticImage
      alt="online payments"
      src="../../Assets/customerlifecycles.png"
    />,
    <StaticImage
      alt="online payments"
      src="../../Assets/detailedreporting.png"
    />,
  ]
  const featureCheckboxes = [
    [
      "Safe and Secure",
      "PCI DSS Level 1",
      "Flexibile Payment Options",
      "Crypto",
    ],
    [
      "Detailed Analytics",
      "Popularity Reports",
      "Cost Margin Analysis Data",
      "All Time Performer Information",
    ],
    [
      "Cohort Tracking",
      "Full Subscriber Lifecycle Management",
      "Customer Accessible Data Panel",
      "Invoice Billing",
    ],
    [
      "Extensive Reporting",
      "Subscriber Tracking",
      "Cohort Analysis",
      "Helpful Tips",
    ],
  ]
  const slideCircles = featureCheckboxes.map((item, index) => {
    item = false
  })

  const [featureTitleIndex, setFeatureTitleIndex] = useState(0)

  const updateFeatureTitle = () => {
    setTimeout(() => {
      if (featureTitleIndex < featureTitles.length - 1) {
        setFeatureTitleIndex(prevFeatureTitleIndex => prevFeatureTitleIndex + 1)
      } else {
        setFeatureTitleIndex(0)
      }
    }, 2500)
  }
  updateFeatureTitle()

  return (
    <div className="index_features_wrapper">
      <div className="index_features_content">
        <div className="index_features_left">
          <h5>Stay Connected To...</h5>
          <h1>{featureTitles[featureTitleIndex]}</h1>
          {featureImages[featureTitleIndex]}
        </div>
        <div className="index_features_right">
          <ul>
            {/* {featureCheckboxes.map((item, index)=> {
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="checkbox-icon" />
                {featureCheckboxes[0][0]}
              </li>
            })} */}
            <li>
              <FontAwesomeIcon icon={faCheckSquare} className="checkbox-icon" />
              {featureCheckboxes[featureTitleIndex][0]}
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckSquare} className="checkbox-icon" />
              {featureCheckboxes[featureTitleIndex][1]}
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckSquare} className="checkbox-icon" />
              {featureCheckboxes[featureTitleIndex][2]}
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckSquare} className="checkbox-icon" />
              {featureCheckboxes[featureTitleIndex][3]}
            </li>
          </ul>
          <button className="button-blue_pos">Learn More</button>
        </div>
      </div>
      <div className="index_features_progress">
        {slideCircles.map((item, index) => {
          if (index == featureTitleIndex) {
            return <div className="progress_circle active"></div>
          } else {
            return <div className="progress_circle"></div>
          }
        })}
      </div>
    </div>
  )
}

export default IndexFeatures
