import React, { Component } from "react";

import Chart from "react-apexcharts";

 

class HomeChart extends Component {

  constructor(props) {

    super(props);

 

    this.state = {

      options: {

        chart: {

          type : 'line',

          toolbar : {

            show : false

          }

        },

        colors : ['#FFC405','#55C22A'],

        plotOptions: {

            bar: {

              borderRadius: 8,

              borderRadiusApplication: 'end'

            }

        },

        xaxis: {

          categories: ['Mon','Thue','Wed','Fri','Thu','Sat','Sun'],

          axisTicks : {

            show : false

          },

          axisBorder : {

            show : false,

          }

        },

        yaxis: {

            labels : {

              show : false

            },

            axisTicks : {

              show : false

            },

            opposite: true,

           

        },

        legend : {

          position : 'top'

        },

        fill: {

          colors: ['#FFC405']

        },

        grid : {

            yaxis: {

                lines: {

                    show: false

                }

            },

        },

        dataLabels: {

            enabled : true,

            enabledOnSeries: [1]

        },

       

        stroke: {

          width: [0, 1]

        },

     

      },

      series: [

        {

          name: 'Your activities',

          type: 'bar',

          data: [350, 275, 375, 375, 300, 225, 275]

        },

        {

          name: 'Your goals',

          type: 'line',

          data: [400, 350, 450, 400, 350, 300, 350]

        },

      ]

    };

  }

 

  render() {

    return (

      <div className="app h-full">

        <div className="row h-full">

          <div className="mixed-chart h-full">

            <Chart

              options={this.state.options}

              series={this.state.series}

              type="line"

              width="100%"

              height="275px"

            />

          </div>

        </div>

      </div>

    );

  }

}

 

export default HomeChart