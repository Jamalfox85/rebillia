import React, { useState } from "react"
import "./IndexFeatures.css"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons"
import {onlinepayments} from '../../Assets/onlinepayments.png'
import {popularpurchases} from '../../Assets/popularpurchases.png'

const IndexFeatures = () => {
  const featureTitles = [
    "Recurring Offerings",
    "Popular Purchases",
    "Customer Lifecycles",
    "Detailed Reporting",
  ]
  const featureImages = [
    onlinepayments,
    popularpurchases,
    "../../Assets/customerlifecycles.png",
    "../../Assets/detailedreporting.png",
  ]

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
          <StaticImage
            alt="online payments"
            src={featureImages[featureTitleIndex]}
          />
        </div>
        <div className="index_features_right">
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheckSquare} className="checkbox-icon" />
              Detailed Billing
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckSquare} className="checkbox-icon" />
              Powerful Analytics
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckSquare} className="checkbox-icon" />
              Cohort Grouping
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckSquare} className="checkbox-icon" />
              Revenue Recovery
            </li>
          </ul>
          <button className="button-blue_pos">Learn More</button>
        </div>
      </div>
      <div className="index_features_progress">
        <div className="progress_circle"></div>
        <div className="progress_circle"></div>
        <div className="progress_circle"></div>
        <div className="progress_circle"></div>
        <div className="progress_circle"></div>
      </div>
    </div>
  )
}

export default IndexFeatures
