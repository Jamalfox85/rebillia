import React from "react"
import "./IndexFeatures.css"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const IndexFeatures = () => {
  const slideData = [
    {
      feature: "Finances",
      imagesrc: "../../Assets/onlinepayments.png",
      checkboxes: [
        "Detailed Billing",
        "Powerful Analytics",
        "Cohort Grouping",
        "Revenue Recovery",
      ],
      buttonlink: "/product",
    },
    {
      feature: "Billing",
      imagesrc: "../../Assets/onlinepayments.png",
      checkboxes: ["Billing 1", "Billing 2", "Billing 3", "Billing 4"],
      buttonlink: "/product",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(slideData[0])
  const changeSlide = () => {
    setTimeout(
      setCurrentSlide(prevCurrentSlide => prevCurrentSlide + 1),
      500
    )
  }

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
