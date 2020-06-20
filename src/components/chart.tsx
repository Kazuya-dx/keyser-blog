import React from "react"
import "./chart.scss"

const Chart = ({ title, subtitle, summary, imgurl }) => {
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
      <div className="chart-text-block">
        <h2 className="title">{subtitle}</h2>
        <p className="summary">{summary}</p>
      </div>
    </article>
  )
}

export default Chart
