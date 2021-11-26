import React from "react"
import "./IndexFeatures.css"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons"

const IndexFeatures = () => {
  return (
    <div className="index_features_wrapper">
      <div className="index_features_content">
        <div className="index_features_left">
          <h5>Stay Connected To...</h5>
          <h1>Finances</h1>
          <StaticImage src="../../Assets/onlinepayments.png" />
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
