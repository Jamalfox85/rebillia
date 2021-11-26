import React from "react"
import "./IndexSocialProof.css"
import { StaticImage } from "gatsby-plugin-image"

const socialproof = () => {
  return (
    <div className="socialproof_wrapper">
      <div className="socialproof-bar"></div>
      <div className="socialproof-carousel">
        <StaticImage
          className="carousel-logo"
          src="../../Assets/logo-tastefullysimple.png"
          alt="Tastefully Simple"
          width={125}
          height={60}
          objectfit="contain"
        />
        <StaticImage
          className="carousel-logo"
          src="../../Assets/logo-tastefullysimple.png"
          alt="Tastefully Simple"
          width={125}
          height={60}
          objectfit="contain"
        />
        <StaticImage
          className="carousel-logo"
          src="../../Assets/logo-tastefullysimple.png"
          alt="Tastefully Simple"
          width={125}
          height={60}
          objectfit="contain"
        />
        <StaticImage
          className="carousel-logo"
          src="../../Assets/logo-tastefullysimple.png"
          alt="Tastefully Simple"
          width={125}
          height={60}
          objectfit="contain"
        />
        <StaticImage
          className="carousel-logo"
          src="../../Assets/logo-tastefullysimple.png"
          alt="Tastefully Simple"
          width={125}
          height={60}
          objectfit="contain"
        />
      </div>
      <div className="socialproof-bar"></div>
    </div>
  )
}

export default socialproof
