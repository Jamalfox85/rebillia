import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDollarSign,
  faCalendarAlt,
  faShippingFast,
  faUsers,
  faChartBar,
  faMoneyCheckAlt,
} from "@fortawesome/free-solid-svg-icons"

import "./Index_mainfunctions.css"
import Hover from "react-3d-hover"

const Index_mainfunctions = () => {
  return (
    <div className="index-mainfunctions-wrapper">
      <div className="main-functions-grid">
        <div className="mf-main">
          <h1>A Cut Above The Rest</h1>
          <h5>
            Look at our main features that help us stand out from the
            competition.
          </h5>
          <div className="mf-main-image">
            <StaticImage alt="revenue" src="../../Assets/revenue.png" />
          </div>
        </div>
        <Hover scale={1.05} perspective={450} speed={750}>
          <div className="mf mf-1">
            <h6>Multi Currency - Multi Gateway</h6>
            <FontAwesomeIcon icon={faDollarSign} className="mf-image" />
            <p>
              Connect multiple gateways and multiple currencies. Route different
              currencies through the gateways with the lowest fees to optimize
              costs.
            </p>
            <Link to="/features">Learn more</Link>
          </div>
        </Hover>
        <Hover scale={1.05} perspective={450} speed={750}>
          <div className="mf mf-2">
            <h6>Rate Plans</h6>
            <FontAwesomeIcon icon={faCalendarAlt} className="mf-image" />

            <p>
              Build your own subscription model using Rebilila's rate plan
              tools. Create a completely custom subscription model your
              competitors could only dream of.
            </p>
            <Link to="/features">Learn more</Link>
          </div>
        </Hover>
        <Hover scale={1.05} perspective={450} speed={750}>
          <div className="mf mf-3">
            <h6>Modern Payment Options</h6>
            <FontAwesomeIcon icon={faMoneyCheckAlt} className="mf-image" />

            <p>
              Rebilia allows you to collect payments through all the most modern
              methods including Debit/Credit, Apple Pay, Amazon Pay, NFTs and
              Crypto, and more.
            </p>
            <Link to="/features">Learn more</Link>
          </div>
        </Hover>
        <Hover scale={1.05} perspective={450} speed={750}>
          <div className="mf mf-4">
            <h6>Dynamic Shipping Rules</h6>
            <FontAwesomeIcon icon={faShippingFast} className="mf-image" />

            <p>
              Connect Rebillia to your favorite shipping partners including
              USPS, Fedex, and UPS. Don't have an account? Rebillia also offers
              native shipping rules to match your specific needs.
            </p>
            <Link to="/features">Learn more</Link>
          </div>
        </Hover>
        <Hover scale={1.05} perspective={450} speed={750}>
          <div className="mf mf-5">
            <h6>User Roles</h6>
            <FontAwesomeIcon icon={faUsers} className="mf-image" />

            <p>
              Rebillia makes subscription management easy for your team. Assign
              different team members user roles and control who can access what
              part of your business.
            </p>
            <Link to="/features">Learn more</Link>
          </div>
        </Hover>
        <div className="mf mf-6">
          <h6>Powerful Analytics</h6>
          <FontAwesomeIcon icon={faChartBar} className="mf-image" />

          <p>
            Track all the data surrounding your subscriptions. Monitor cohorts,
            identify your highest performing subscriptions, and download
            detailed subscriber reports.
          </p>
          <Link to="/features">Learn more</Link>
        </div>
      </div>
    </div>
  )
}

export default Index_mainfunctions
