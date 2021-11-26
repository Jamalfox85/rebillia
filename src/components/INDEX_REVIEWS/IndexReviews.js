import React from "react"
import "./IndexReviews.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import { StaticImage } from "gatsby-plugin-image"

const IndexReviews = () => {
  return (
    <div className="indexreviews_wrapper">
      <div className="indexreviews_content">
        <div className="indexreviews_left">
          <FontAwesomeIcon icon={faQuoteLeft} className="quote-left" />
          <h5>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer t
          </h5>
          <FontAwesomeIcon icon={faQuoteRight} className="quote-right" />
        </div>
        <div className="indexreviews_right">
          <h5>Company</h5>
          <h5>Chief Operational Officer</h5>
          <StaticImage
            src="../../Assets/product-pic-tastefullysimple.jpg"
            alt="company review product"
            width={250}
          height={500}
          />
          <p>
            Standard monthly subscription model. Customers can order products
            every 1, 2, or 3 months. They have the ability to pay month to
            month, or prepaid
          </p>
        </div>
      </div>
      <div className="indexreviews_progress">
        <div className="progress_circle"></div>
        <div className="progress_circle"></div>
        <div className="progress_circle"></div>
        <div className="progress_circle"></div>
        <div className="progress_circle"></div>
      </div>
    </div>
  )
}

export default IndexReviews
