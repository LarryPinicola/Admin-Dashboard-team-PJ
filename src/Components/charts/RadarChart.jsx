import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const RadarChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Series 1",
        data: [80, 70, 110, 75, 100, 55],
        color:'#6035fd'
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "radar",
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
      },
      stock:[0]
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radar"
        height={350}
      />
    </div>
  );
};

export default RadarChart;
