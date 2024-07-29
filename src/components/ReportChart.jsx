import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import './ReportChart.css';

const ReportChart = () => {
  const [data, setData] = useState({
    series: [
      // {
      //   name: 'Bugs',
      //   data: [31, 40, 28, 51, 42, 83, 56, 68, 75, 60, 80, 95]
      // },
      {
        name: 'Solved Bugs',
        data: [11, 11, 32, 18, 9, 24, 11, 20, 22, 30, 40, 50]
      },
      {
        name: 'Reported Bugs',
        data: [14, 32, 43, 32, 43, 34, 52, 41, 45, 55, 65, 75]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      colors: ['#4154f1',  '#2eca6a','#ff771d'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2024-01-01T00:00:00.000Z',
          '2024-02-01T00:00:00.000Z',
          '2024-03-01T00:00:00.000Z',
          '2024-04-01T00:00:00.000Z',
          '2024-05-01T00:00:00.000Z',
          '2024-06-01T00:00:00.000Z',
          '2024-07-01T00:00:00.000Z',
          '2024-08-01T00:00:00.000Z',
          '2024-09-01T00:00:00.000Z',
          '2024-10-01T00:00:00.000Z',
          '2024-11-01T00:00:00.000Z',
          '2024-12-01T00:00:00.000Z'
        ],
      },
      tooltip: {
        x: {
          format: 'MMM yyyy',
        },
      },
    },
  });

  return (
    <Chart
      options={data.options}
      series={data.series}
      type={data.options.chart.type}
      height={data.options.chart.height}
    />
  );
}

export default ReportChart;
