import React from "react"
import "./IndexHero.css"
import Particles from "react-tsparticles"
import Hover from "react-3d-hover"

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
          that keeps you <span style={{ color: "#D1FAFF" }}>CONNECTED</span>.
        </h1>
        <div className="particles">
          <Particles
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
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: false,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 4,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 100,
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
                  enable: false,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "out",
                  random: false,
                  speed: 1,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 40,
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
          />
        </div>
        <button className="button-green_pos">Contact</button>
      </div>
      <div className="index_hero_right">
        <Hover scale={1.03} perspective={450} speed={750}>
          <div className="card">
            <h2 className="card-logo">Rebillia</h2>
            <h2 className="card-number">4242 4242 4242 4242</h2>
            <h2 className="card-expiration">12/25</h2>
            <h2 className="card-name">Rebillia Platform</h2>
            <h2 className="card-visa">VISA</h2>
          </div>
        </Hover>
      </div>
    </div>
  )
}

export default index_hero
