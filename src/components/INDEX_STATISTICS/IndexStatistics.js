import { Chart } from "chart.js"
import React, { useState, useEffect } from "react"
import "./IndexStatistics.css"
import { Line } from "react-chartjs-2"

const IndexStatistics = () => {
  const [indexStatSlide, setIndexStatSlide] = useState(0)

  const [whatever, setWhatever] = useState({})

  const chart = () => {
    setWhatever({
      labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      datasets: [
        {
          level: "level of xyz",
          data: [32, 55, 33, 47, 64],
        },
      ],
    })
  }
  useEffect(() => {
    chart()
  }, [])

  return (
    <div className="indexstatistics-wrapper">
      <h1>The Numbers Don't Lie</h1>
      <div className="indexstatistics-main">
        {/* <canvas id="myChart">{myChart}</canvas> */}
        {/* <Line data={whatever} /> */}
      </div>
    </div>
  )
}

export default IndexStatistics
