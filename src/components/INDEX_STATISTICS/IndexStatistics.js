import React, { useState, useEffect } from "react"
import "./IndexStatistics.css"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js"
import { Line, Doughnut, Scatter, Pie } from "react-chartjs-2"
import faker from "faker"

const IndexStatistics = () => {
  const [indexStatSlide, setIndexStatSlide] = useState(0)

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  )

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ]

  const lineData = {
    labels,
    datasets: [
      {
        label: "Rebillia",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgba(6, 186, 99, 1)",
        backgroundColor: "rgba(6, 186, 99, 0.5)",
      },
      {
        label: "Competitors",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgba(20, 82, 163, 1)",
        backgroundColor: "rgba(20, 82, 163, 0.5)",
      },
    ],
  }

  const doughnutData = {
    labels: ["SAAS", "Food & Drink", "Health & Beauty", "Services", "Retail"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(20, 82, 163, 0.2)",
          "rgba(6, 186, 99, 0.2)",
          "rgba(191, 49, 0, 0.2)",
          "rgba(192, 76, 253, 0.2)",
          "rgba(255, 196, 130, 0.2)",
        ],
        borderColor: [
          "rgba(20, 82, 163, 1)",
          "rgba(6, 186, 99, 1)",
          "rgba(191, 49, 0, 1)",
          "rgba(192, 76, 253, 1)",
          "rgba(255, 196, 130, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const scatterData = {
    datasets: [
      {
        label: "Rebillia Merchants",
        data: Array.from({ length: 100 }, () => ({
          x: faker.datatype.number({ min: -100, max: 100 }),
          y: faker.datatype.number({ min: -100, max: 100 }),
        })),
        backgroundColor: "rgba(6, 186, 99, 1)",
      },
    ],
  }

  const pieData = {
    labels: [
      "1 -2 years",
      "over 2 years",
      "3 - 6 months",
      "6 - 12 months",
      "Less than 3 months",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(20, 82, 163, 0.2)",
          "rgba(6, 186, 99, 0.2)",
          "rgba(191, 49, 0, 0.2)",
          "rgba(192, 76, 253, 0.2)",
          "rgba(255, 196, 130, 0.2)",
        ],
        borderColor: [
          "rgba(20, 82, 163, 1)",
          "rgba(6, 186, 99, 1)",
          "rgba(191, 49, 0, 1)",
          "rgba(192, 76, 253, 1)",
          "rgba(255, 196, 130, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const dataCharts = [
    {
      title: "Subscription growth rate with Rebillia compared to competitors",
      return: <Line className="data-chart" options={options} data={lineData} />,
    },
    {
      title: "Rebillia merchant industries",
      return: (
        <Doughnut className="data-chart circle-chart" data={doughnutData} />
      ),
    },
    {
      title: "Rebillia merchant monthly revenue",
      return: (
        <Scatter className="data-chart" options={options} data={scatterData} />
      ),
    },
    {
      title: "Average length of accounts with Rebillia (closed accounts only)",
      return: <Pie className="data-chart circle-chart" data={pieData} />,
    },
  ]

  return (
    <div className="indexstatistics-wrapper">
      <div className="statistics-heading">
        <h1 className="statistics-header">The Numbers Don't Lie</h1>
        <div className="statistics-tabs">
          <h1
            className={
              indexStatSlide === 0 ? "stat-tab active-stat" : "stat-tab"
            }
            onClick={() => setIndexStatSlide(0)}
          >
            Merchant Growth
          </h1>
          <h1
            className={
              indexStatSlide === 1 ? "stat-tab active-stat" : "stat-tab"
            }
            onClick={() => setIndexStatSlide(1)}
          >
            Merchant Industries
          </h1>
          <h1
            className={
              indexStatSlide === 2 ? "stat-tab active-stat" : "stat-tab"
            }
            onClick={() => setIndexStatSlide(2)}
          >
            Monthly Revenue
          </h1>
          <h1
            className={
              indexStatSlide === 3 ? "stat-tab active-stat" : "stat-tab"
            }
            onClick={() => setIndexStatSlide(3)}
          >
            Account Length
          </h1>
        </div>
      </div>
      <div className="indexstatistics-main">
        <h4 className="chart-title">{dataCharts[indexStatSlide].title}</h4>

        {dataCharts[indexStatSlide].return}
      </div>
    </div>
  )
}

export default IndexStatistics
