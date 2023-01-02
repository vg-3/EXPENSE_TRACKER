import React from "react";
import "./ChartBar.css";
const ChartBar = (porps) => {
  let barFillHeight = "0%";

  if (porps.maxValue > 0) {
    barFillHeight = Math.round((porps.value / porps.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{porps.label}</div>
    </div>
  );
};
export default ChartBar;
