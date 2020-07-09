import React from "react"
import "./chart.scss"

const Chart = ({ title, imgurl }) => {
  return (
    <article className="chart-wrap">
      <figure
        className="chart-img"
        style={{
          backgroundImage: "url(" + imgurl + ")",
        }}
      >
        {title}
      </figure>
    </article>
  )
}

export default Chart
