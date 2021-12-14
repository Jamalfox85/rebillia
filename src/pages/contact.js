import * as React from "react"
import { Link } from "gatsby"
import Particles from "react-tsparticles"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/Page_Styles/contact-page/contact-page.css"

const particlesInit = main => {
  console.log(main)

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
}

const particlesLoaded = container => {
  console.log(container)
}

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <div className="contact-page-wrapper">
      <div className="contact-header">
        <h1>Have a question?</h1>
        <p>
          Our team of highly trained specialists will be happy to answer any
          inquiry you have.
        </p>
        <p>
          Fill out the form below and please allow 1 business day for a
          response.
        </p>
      </div>
      <form className="contact-form-wrapper">
        <div className="form-row">
          <div className="input-group">
            <label for="f-name">First Name:</label>
            <input type="text" name="f-name" />
          </div>
          <div className="input-group">
            <label for="l-name">Last Name:</label>
            <input type="text" name="l-name" />
          </div>
        </div>
        <div className="form-row">
          <div className="input-group">
            <label for="email">Email:</label>
            <input type="email" name="email" />
          </div>
          <div className="input-group">
            <label for="phone">Phone:</label>
            <input type="phone" name="phone" />
          </div>
        </div>
        <div className="form-row">
          <div className="input-group">
            <label for="company">Company:</label>
            <input type="text" name="company" />
          </div>
          <div className="input-group">
            <label for="position">Position:</label>
            <input type="text" name="position" />
          </div>
        </div>
        <div className="form-row">
          <div className="input-group">
            <label for="message">Message:</label>
            <textarea name="message" rows="7" cols="50"></textarea>
          </div>
        </div>
        <button type="submit" className="contact-form-submit button-green_pos">
          Submit
        </button>
      </form>
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
                value: "#071b36",
              },
              links: {
                color: "#071b36",
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
    </div>
  </Layout>
)

export default ContactPage
