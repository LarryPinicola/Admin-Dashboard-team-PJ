import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ColumnAreaChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Social Media",
        type: "column",
        data: [650, 850, 550, 750, 850, 700, 1050, 1100],
        color: "#6035fd",
      },
      {
        name: "Website Blog",
        type: "area",
        data: [800, 900, 1050, 1100, 1000, 850, 1050, 1150],
        color: "#ededed",
        curve: "smooth",
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        // background: "#f4f4f4",
        foreColor: "#333",
      },
      stroke: {
        width: [0, 1],
        color: ["#ffb084"],
        curve: "smooth",
      },
      dataLabels: {
        enabled: false,
        enabledOnSeries: [1],
      },
      
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      },
      
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={350}
        width="100%"
      />
    </div>
  );
};

export default ColumnAreaChart;
