import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/Page_Styles/contact-page/contact-page.css"

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
    </div>
  </Layout>
)

export default ContactPage
