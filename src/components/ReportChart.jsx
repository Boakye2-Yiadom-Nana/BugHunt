import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import './ReportChart.css';

const ReportChart = () => {
  const [data, setData] = useState({
    series: [],
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
      colors: ['#4154f1', '#2eca6a', '#ff771d'],
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
        categories: [],
      },
      tooltip: {
        x: {
          format: 'MMM yyyy',
        },
      },
    },
  });

  useEffect(() => {
    fetchChartData();
  }, []);

  const fetchChartData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/reportchart', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const chartData = await response.json();
      
      setData(prevData => ({
        ...prevData,
        series: chartData.series,
        options: {
          ...prevData.options,
          xaxis: {
            ...prevData.options.xaxis,
            categories: chartData.categories
          }
        }
      }));
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
  };

  return (
    <Chart
      className='chart'
      options={data.options}
      series={data.series}
      type={data.options.chart.type}
      height={data.options.chart.height}
    />
  );
}

export default ReportChart;
