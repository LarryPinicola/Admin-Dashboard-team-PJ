import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const AreaChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Website Blog Visits",
        data: [670, 720, 770, 690, 900, 970, 1030],
        color: "#6035fd",
      },
      {
        name: "Social Media Visits",
        data: [760, 590, 910, 850, 700, 1050, 920],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
      },
    },
  });

  return (
    <div className="" id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={350}
        width="100%"
      />
    </div>
  );
};

export default AreaChart;
