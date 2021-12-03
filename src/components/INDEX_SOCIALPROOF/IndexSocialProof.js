import React from "react"
import "./IndexSocialProof.css"
import { StaticImage } from "gatsby-plugin-image"

const socialproof = () => {
  const companyLogos = [
    // <StaticImage
    //       className="carousel-logo"
    //       src="../../Assets/logo-tastefullysimple.png"
    //       alt="Tastefully Simple"
    //       width={125}
    //       height={60}
    //       objectfit="contain"
    //     />,
    //     <StaticImage
    //       className="carousel-logo"
    //       src="../../Assets/logo-tastefullysimple.png"
    //       alt="Tastefully Simple"
    //       width={125}
    //       height={60}
    //       objectfit="contain"
    //     />,
    //     <StaticImage
    //       className="carousel-logo"
    //       src="../../Assets/logo-tastefullysimple.png"
    //       alt="Tastefully Simple"
    //       width={125}
    //       height={60}
    //       objectfit="contain"
    //     />,
    //     <StaticImage
    //       className="carousel-logo"
    //       src="../../Assets/logo-tastefullysimple.png"
    //       alt="Tastefully Simple"
    //       width={125}
    //       height={60}
    //       objectfit="contain"
    //     />,
    //     <StaticImage
    //       className="carousel-logo"
    //       src="../../Assets/logo-tastefullysimple.png"
    //       alt="Tastefully Simple"
    //       width={125}
    //       height={60}
    //       objectfit="contain"
    //     />
    <p className="carousel-logo">Item 1</p>,
    <p className="carousel-logo">Item 2</p>,
    <p className="carousel-logo">Item 3</p>,
    <p className="carousel-logo">Item 4</p>,
    <p className="carousel-logo">Item 5</p>,
  ]

  const updateList = () => {
    setTimeout(() => {
      let x = companyLogos[0]
      companyLogos.shift(x)
      companyLogos.push(x)
      console.log("ping")
    }, 500)
  }

  updateList();

  return (
    <div className="socialproof_wrapper">
      <div className="socialproof-bar"></div>
      <div className="socialproof-carousel-wrapper">
        <div className="socialproof-carousel">
          {companyLogos.map((index, item) => {
            return companyLogos[item]
          })}
        </div>
      </div>
      <div className="socialproof-bar"></div>
    </div>
  )
}

export default socialproof
