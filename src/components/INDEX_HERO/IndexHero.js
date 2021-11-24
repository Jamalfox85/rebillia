import React from "react"
import "./IndexHero.css"

const index_hero = () => {
  return (
    <div className="index_hero">
      <div className='index_hero_left'>
        <h1>The subscription network that keeps you connected.</h1>
        <div className='particle-js'></div>
        <button className='button-purple_pos'>Contact</button>
      </div>
      <div className='index_hero_right'></div>
    </div>
  )
}

export default index_hero
