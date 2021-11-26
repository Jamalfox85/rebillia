import React from "react"
import "./IndexHero.css"
import Particles from "react-tsparticles"

const index_hero = () => {
  const particlesInit = main => {
    console.log(main)

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  const particlesLoaded = container => {
    console.log(container)
  }

  return (
    <div className="index_hero">
      <div className="index_hero_left">
        <h1>
          The <span style={{ color: "#D1FAFF" }}>SUBSCRIPTION</span> network
          that keeps you <span>CONNECTED</span>.
        </h1>
        <div className="particle-sphere">
          {/* <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            className="particles"
            options={{
              background: {
                color: {
                  value: "transparent",
                },
              },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 5,
                },
                image: {
                  width: 100,
                  height: 100,
                },
              },
              detectRetina: true,
            }}
          /> */}
        </div>
        <button className="button-purple_pos">Contact</button>
      </div>
      <div className="index_hero_right">
        <div className="card">
          <h2 className="card-logo">Rebillia</h2>
          <h2 className="card-number">4242 4242 4242 4242</h2>
          <h2 className="card-expiration">12/25</h2>
          <h2 className="card-name">Rebillia Platform</h2>
          <h2 className="card-visa">VISA</h2>
        </div>
      </div>
    </div>
  )
}

export default index_hero
