import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect } from "react"
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
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Index_mainfunctions = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const mfCardVariations = {
    visible: { opacity: 1, y: 0, transition: { duraction: 0.7 } },
    hidden: { opacity: 0, y: 50 },
  }

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
          <motion.div
            className="mf mf-1"
            variants={mfCardVariations}
            initial="hidden"
            animate={controls}
            ref={ref}
          >
            <h6>Multi Currency - Multi Gateway</h6>
            <FontAwesomeIcon icon={faDollarSign} className="mf-image" />
            <p>
              Connect multiple gateways and multiple currencies. Route different
              currencies through the gateways with the lowest fees to optimize
              costs.
            </p>
            <Link to="/features">Learn more</Link>
          </motion.div>
        </Hover>
        <Hover scale={1.05} perspective={450} speed={750}>
          <motion.div
            className="mf mf-2"
            variants={mfCardVariations}
            initial="hidden"
            animate={controls}
            ref={ref}
          >
            <h6>Rate Plans</h6>
            <FontAwesomeIcon icon={faCalendarAlt} className="mf-image" />

            <p>
              Build your own subscription model using Rebilila's rate plan
              tools. Create a completely custom subscription model your
              competitors could only dream of.
            </p>
            <Link to="/features">Learn more</Link>
          </motion.div>
        </Hover>
        <Hover scale={1.05} perspective={450} speed={750}>
          <motion.div
            className="mf mf-3"
            variants={mfCardVariations}
            initial="hidden"
            animate={controls}
            ref={ref}
          >
            <h6>Modern Payment Options</h6>
            <FontAwesomeIcon icon={faMoneyCheckAlt} className="mf-image" />

            <p>
              Rebilia allows you to collect payments through all the most modern
              methods including Debit/Credit, Apple Pay, Amazon Pay, NFTs and
              Crypto, and more.
            </p>
            <Link to="/features">Learn more</Link>
          </motion.div>
        </Hover>
        <Hover scale={1.05} perspective={450} speed={750}>
          <motion.div
            className="mf mf-4"
            variants={mfCardVariations}
            initial="hidden"
            animate={controls}
            ref={ref}
          >
            <h6>Dynamic Shipping Rules</h6>
            <FontAwesomeIcon icon={faShippingFast} className="mf-image" />

            <p>
              Connect Rebillia to your favorite shipping partners including
              USPS, Fedex, and UPS. Don't have an account? Rebillia also offers
              native shipping rules to match your specific needs.
            </p>
            <Link to="/features">Learn more</Link>
          </motion.div>
        </Hover>
        <Hover scale={1.05} perspective={450} speed={750}>
          <motion.div
            className="mf mf-5"
            variants={mfCardVariations}
            initial="hidden"
            animate={controls}
            ref={ref}
          >
            <h6>User Roles</h6>
            <FontAwesomeIcon icon={faUsers} className="mf-image" />

            <p>
              Rebillia makes subscription management easy for your team. Assign
              different team members user roles and control who can access what
              part of your business.
            </p>
            <Link to="/features">Learn more</Link>
          </motion.div>
        </Hover>
        <Hover scale={1.05} perspective={450} speed={750}>
          <motion.div
            className="mf mf-6"
            variants={mfCardVariations}
            initial="hidden"
            animate={controls}
            ref={ref}
          >
            <h6>Powerful Analytics</h6>
            <FontAwesomeIcon icon={faChartBar} className="mf-image" />
            <p>
              Track all the data surrounding your subscriptions. Monitor
              cohorts, identify your highest performing subscriptions, and
              download detailed subscriber reports.
            </p>
            <Link to="/features">Learn more</Link>
          </motion.div>
        </Hover>
      </div>
    </div>
  )
}

export default Index_mainfunctions
