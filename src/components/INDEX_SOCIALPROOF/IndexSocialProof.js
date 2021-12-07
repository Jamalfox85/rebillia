import React from "react"
import "./IndexSocialProof.css"
import { StaticImage } from "gatsby-plugin-image"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/themes/splide-default.min.css"

const socialproof = () => {
  const companyLogos = [
    <StaticImage
      className="carousel-logo"
      src="../../Assets/logo-tastefullysimple.png"
      alt="Tastefully Simple Logo"
      width={125}
      height={60}
      objectfit="contain"
    />,
    <StaticImage
      className="carousel-logo"
      src="../../Assets/logo-candyclub.png"
      alt="Candy Club Logo"
      // width={125}
      // height={60}
      objectfit="contain"
    />,
    <StaticImage
      className="carousel-logo"
      src="../../Assets/logo-cbdco.png"
      alt="CBD.CO Logo"
      width={125}
      height={60}
      objectfit="contain"
    />,
    <StaticImage
      className="carousel-logo"
      src="../../Assets/logo-farmers.png"
      alt="The Old Farmer's Almanac Logo"
      // width={250}
      // height={60}
      objectfit="contain"
    />,
    <StaticImage
      className="carousel-logo"
      src="../../Assets/logo-gillette.png"
      alt="Gillette Logo"
      // width={125}
      // height={60}
      objectfit="contain"
    />,
    <StaticImage
      className="carousel-logo"
      src="../../Assets/logo-gotham.png"
      alt="Gotham Cigars Logo"
      width={125}
      height={60}
      objectfit="contain"
    />,
    <StaticImage
      className="carousel-logo"
      src="../../Assets/logo-omas.png"
      alt="Omas Pride Logo"
      width={200}
      height={60}
      objectfit="contain"
    />,
    <StaticImage
      className="carousel-logo"
      src="../../Assets/logo-sundaycoupons.png"
      alt="Sunday Coupon Inserts Logo"
      width={200}
      height={60}
      objectfit="contain"
    />,
    <StaticImage
      className="carousel-logo"
      src="../../Assets/logo-teatulia.png"
      alt="Teatulia Logo"
      width={125}
      height={60}
      objectfit="contain"
    />,
    <StaticImage
      className="carousel-logo"
      src="../../Assets/logo-pg.png"
      alt="Proctor and Gamble Logo"
      width={125}
      height={60}
      objectfit="contain"
    />,
  ]

  // const updateList = () => {
  //   setTimeout(() => {
  //     let x = companyLogos[0]
  //     companyLogos.shift(x)
  //     companyLogos.push(x)
  //     console.log("ping")
  //   }, 500)
  // }

  // updateList()

  return (
    <div className="socialproof_wrapper">
      <div className="socialproof-bar"></div>
      <div className="socialproof-carousel-wrapper">
        {/* <div className="socialproof-carousel">
          {companyLogos.map((index, item) => {
            return companyLogos[item]
          })}
        </div> */}
        <Splide
          className="socialproof-carousel"
          options={{
            width: 800,
            gap: "1rem",
            type: "loop",
            speed: 800,
            autoplay: true,
            interval: 1250,
            pauseOnHover: false,
            drag: true,
            easing: "ease",
            pagination: false,
            isNavigation: false,
            arrows: false,
            perPage: 3,
          }}
          autoScroll={{
            speed: 2,
          }}
        >
          {companyLogos.map((index, item) => {
            return <SplideSlide>{companyLogos[item]}</SplideSlide>
          })}
        </Splide>
      </div>
      <div className="socialproof-bar"></div>
    </div>
  )
}

export default socialproof
