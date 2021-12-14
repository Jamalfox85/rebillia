import React, { useEffect } from "react"
import "./IndexCTABanner.css"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const IndexCTABanner = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const ctaVariations = {
    visible: { opacity: 1, transition: { duration: 1.3 } },
    hidden: { opacity: 0 },
  }

  return (
    <div className="indexctabanner_wrapper">
      <motion.div
        className="indexctabanner_wrapper"
        variants={ctaVariations}
        animate={controls}
        initial="hidden"
        ref={ref}
      >
        <h1>Contact Us Today</h1>
        <h5>
          Book a free demo to learn how Rebillia <br />
          can help you reach your business goals.
        </h5>
        <button className="button-green_pos">Schedule A Demo</button>
      </motion.div>
    </div>
  )
}

export default IndexCTABanner
