import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Link } from "gatsby"

import "./Index_mainfunctions.css"

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
        <div className="mf mf-1">
          <h6>Multi Currency - Multi Gateway</h6>
          <p>
            Connect multiple gateways and multiple currencies. Route different
            currencies through the gateways with the lowest fees to optimize
            costs.
          </p>
          <Link to="/features">Learn more</Link>
        </div>
        <div className="mf mf-2">
          <h6>Rate Plans</h6>
          <p>
            Build your own subscription model using Rebilila's rate plan tools.
            Create a completely custom subscription model your competitors could
            only dream of.
          </p>
          <Link to="/features">Learn more</Link>
        </div>
        <div className="mf mf-3">
          <h6>Modern Payment Options</h6>
          <p>
            Rebilia allows you to collect payments through all the most modern
            methods including Debit/Credit, Apple Pay, Amazon Pay, NFTs and
            Crypto, and more.
          </p>
          <Link to="/features">Learn more</Link>
        </div>
        <div className="mf mf-4">
          <h6>Dynamic Shipping Rules</h6>
          <p>
            Connect Rebillia to your favorite shipping partners including USPS,
            Fedex, and UPS. Don't have an account? Rebillia also offers native
            shipping rules to match your specific needs.
          </p>
          <Link to="/features">Learn more</Link>
        </div>
        <div className="mf mf-5">
          <h6>User Roles</h6>
          <p>
            Rebillia makes subscription management easy for your team. Assign
            different team members user roles and control who can access what
            part of your business.
          </p>
          <Link to="/features">Learn more</Link>
        </div>
        <div className="mf mf-6">
          <h6>Powerful Analytics</h6>
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
