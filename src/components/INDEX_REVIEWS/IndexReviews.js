import React, { useState } from "react"
import "./IndexReviews.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"

const IndexReviews = () => {
  const reviewData = [
    {
      company: "Company 1",
      review:
        "I can't say enough about the customer care from Rebilia. i came to them with a MAJOR problem on my website and even though it wasn't even related to Rebilia- my representative took the time to investigate and help me with my problem. When i called in a state of panic, my representative made it better and helped lead me to a solution that solved my problem...even though it wasn't even a Rebilia issue. I'm so thankful. Thank you Rebilia! Nadia",
      model: "Standard Monthly. Frequencies: 1, 2, 3 month.",
    },
    {
      company: "Company 2",
      review:
        "Rebillia was exactly the solution we needed to launch our store fast without having to pull our our developers away from other projects. The Rebillia team is extremely knowledgeable and are always eager to come up with solutions for some of our unique challenges. The customer service is top-notch! We almost always get answers to our questions immediately. Our team couldn’t be happier with this product and we're looking forward to future versions of the software",
      model: "Prepaid subscription model offering 3, 6, and 12 month cycles.",
    },
    {
      company: "Company 3",
      review:
        "We have been with Rebillia since March '18. Our relationship has been extensive. Specifically, Matt, et al. have been able to help us implement Big Commerce optimized checkout, taught us about reMail campaigns, and provided support on all things related to the checkout process. We have a great history with this company. The pricing is transaction based and grows with the use of the product, so you pay for what you use - a fair approach for B2B marketing. The reporting includes revenue generation and the expense matches a monthly revenue cycle so you can always easily verify a positive ROI. We would definitely recommend this app and service to businesses of all sizes.",
      model:
        "Tiered pricing model. After the first 20 units the per-unit price decreases by 15%",
    },
    {
      company: "Company 4",
      review:
        "Our Farm during Covid-19 was fortunate enough to be shipping produce boxes to many in need that didn't want to leave their houses. Rebillia was there every step of the way. We will have our best year yet, with the help of Rebillia. We are looking forward to the subtle improvements coming soon, and the continued integration support that we expect from Bigcommerce platform. Daily, Weekly, Monthly, Annually subscriptions. The crew on tech support and setup are great at helping with the simple or the most complex issues. We hope to continue our partnership with Rebillia in 2021! If your thinking about subscriptions on your storefront, THIS is the one to get.",
      model:
        "Free Trial subscription model. After a 2 week trial the customer is upgraded to a full month-to-month subscription",
    },
  ]
  const slideCircles = reviewData.map((item, index) => {
    item = false
    return <></>
  })

  const [reviewIndex, setReviewIndex] = useState(0)
  const changeReviewIndex = () => {
    setTimeout(() => {
      if (reviewIndex < reviewData.length - 1) {
        setReviewIndex(prevReviewIndex => prevReviewIndex + 1)
      } else {
        setReviewIndex(0)
      }
    }, 5000)
  }
  changeReviewIndex()

  return (
    <div className="indexreviews_wrapper">
      <div className="indexreviews_content">
        <div className="indexreviews_left">
          <FontAwesomeIcon icon={faQuoteLeft} className="quote-left" />
          <p>{reviewData[reviewIndex].review}</p>
          <FontAwesomeIcon icon={faQuoteRight} className="quote-right" />
        </div>
        <div className="indexreviews_right">
          <h5>{reviewData[reviewIndex].company}</h5>
          <p>{reviewData[reviewIndex].model}</p>
        </div>
      </div>
      <div className="indexreviews_progress">
        {slideCircles.map((item, index) => {
          if (index === reviewIndex) {
            return <div className="progress_circle active"></div>
          } else {
            return <div className="progress_circle"></div>
          }
        })}
      </div>
    </div>
  )
}

export default IndexReviews
