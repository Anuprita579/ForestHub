import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Stats = () => {
  // Sample data (replace with actual data)
  const chartData = {
    labels: ['Total Forest Cover', 'Annual Deforestation', 'Annual Reforestation'],
    series: [3000, 10, 20], // Replace with actual data
  };

  const chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: chartData.labels,
    },
    yaxis: {
      title: {
        text: 'Area (in million hectares)',
      },
    },
  };

  // Sample forest data (replace with actual data)
  const forestData = {
    years: ['1992', '2000', '2010', '2015'],
    treeCoverFlooded: [5, 8, 12, 15],
    mosaicTreeAndShrub: [7, 10, 14, 18],
    mixedTreeCover: [10, 15, 20, 25],
    treeCoverBroadleavedDeciduous: [8, 12, 18, 22],
    treeCoverNeedleleavedDeciduous: [6, 9, 15, 20],
    treeCoverBroadleavedEvergreen: [7, 11, 16, 19],
    treeCoverNeedleleavedEvergreen: [4, 7, 10, 14],
  };

  const chartOptions2 = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: forestData.years,
      title: {
        text: 'Years',
      },
    },
    yaxis: {
      title: {
        text: 'Forest Area (Million hectares)',
      },
    },
    legend: {
      position: 'top',
    },
  };

  // Ensure that the forestData arrays have valid data
  const chartSeries2 = [
    { name: 'Tree Cover Flooded', data: forestData.treeCoverFlooded },
    { name: 'Mosaic Tree and Shrub', data: forestData.mosaicTreeAndShrub },
    { name: 'Mixed Tree Cover', data: forestData.mixedTreeCover },
    { name: 'Broadleaved Deciduous', data: forestData.treeCoverBroadleavedDeciduous },
    { name: 'Needleleaved Deciduous', data: forestData.treeCoverNeedleleavedDeciduous },
    { name: 'Broadleaved Evergreen', data: forestData.treeCoverBroadleavedEvergreen },
    { name: 'Needleleaved Evergreen', data: forestData.treeCoverNeedleleavedEvergreen },
  ];

  // Sample data for extinct species distribution (replace with actual data)
  const extinctSpeciesData = [
    { species: 'Mammals', percentage: 25 },
    { species: 'Birds', percentage: 20 },
    { species: 'Amphibians', percentage: 15 },
    { species: 'Reptiles', percentage: 10 },
    { species: 'Plants', percentage: 30 },
  ];

  const chartOptions3 = {
    labels: extinctSpeciesData.map((data) => data.species),
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + '%';
      },
    },
    legend: {
      position: 'bottom',
    },
  };

  const chartSeries3 = extinctSpeciesData.map((data) => data.percentage);

  // Sample data for extinction trend over time (replace with actual data)
  const extinctionDataGroombridge = {
    years: [1600, 1700, 1800, 1900, 1990],
    extinctionCount: [20, 40, 80, 120, 160],
  };

  const extinctionDataButchart = {
    years: [1990, 1995, 2000, 2005, 2010, 2015, 2020],
    extinctionCount: [160, 140, 120, 100, 80, 70, 65],
  };

  const chartOptions4 = {
    chart: {
      type: 'line',
      height: 400,
    },
    xaxis: {
      categories: [...extinctionDataGroombridge.years, ...extinctionDataButchart.years],
      title: {
        text: 'Year',
      },
    },
    yaxis: {
      title: {
        text: 'Number of Extinct Species',
      },
    },
  };

  const chartSeries4 = [
    {
      name: 'Groombridge (1992)',
      data: extinctionDataGroombridge.extinctionCount,
      type: 'line',
      color: '#4caf50', // Green color for solid line
    },
    {
      name: 'Butchart et al. (2010)',
      data: extinctionDataButchart.extinctionCount,
      type: 'line',
      dashArray: 5, // Dotted line
      color: 'black', // Green color for dotted line
    },
  ];

  return (
    <div className='w-full h-full flex justify-center'>
      <div className='w-5/6'>
        <div className="my-8">
          <h2 className='text-2xl font-semibold font-mono text-green-800'>Global Forest Cover and Rates</h2>
          <ReactApexChart options={chartOptions} series={[{ data: chartData.series }]} type="bar" height={350} />
        </div>

        <div className="my-8">
          <h2 className='text-2xl font-semibold font-mono text-green-800'>Forest Area Within Protected Areas by Forest Type (1992-2015)</h2>
          <ReactApexChart options={chartOptions2} series={chartSeries2} type="bar" height={350} />
        </div>

        <div className="my-8">
          <h2 className='text-2xl font-semibold font-mono text-green-800'>Extinct Species Distribution</h2>
          <ReactApexChart options={chartOptions3} series={chartSeries3} type="pie" height={350} />
        </div>

        <div className="my-8">
          <h2 className='text-2xl font-semibold font-mono text-green-800'>Animal Extinction Trend Over Time</h2>
          <ReactApexChart options={chartOptions4} series={chartSeries4} type="line" height={400} />
        </div>

      </div>
      
    </div>
  );
};

export default Stats;
