import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Website Blog",
        type: "column",
        data: [440, 505, 384, 671, 327, 413, 201, 352, 622],
        color:'#ededed'
      },
      {
        name: "Social Media",
        type: "line",
        data: [23, 42, 35, 27, 39, 22, 17, 31, 26],
        color:'#e22831'
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
        width: [0, 2],
        color: ["#ffb084"],
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
      yaxis: [{
        title: {
          text: 'Website Blog',
        },
      
      }, {
        opposite: true,
        title: {
          text: 'Social Media'
        }
      }],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={350}
        width='100%'
      />
    </div>
  );
};

export default LineChart;
