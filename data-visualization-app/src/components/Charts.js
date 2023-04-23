import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarController, BarElement } from 'chart.js';
import './styles/Charts.css';

Chart.register(CategoryScale, LinearScale, BarController, BarElement);

const Charts = ({ data }) => {
  const [selectedSubject, setSelectedSubject] = useState('');

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const generateChartData = (property, filter) => {
    const chartData = filter.map((value) => getCount(property, value));
    const chartColors = chartData.map(() => `hsla(${Math.random() * 360}, 100%, 75%, 0.6)`);

    return { chartData, chartColors };
  };

  const getCount = (property, value) =>
    filteredData.filter((item) => item[property] === value).length;

  const filteredData = data.filter(
    (item) => !selectedSubject || item.favoriteSubject === selectedSubject
  );

  const chartConfigs = [
    {
      title: 'Best Professor',
      property: 'bestProfessor',
      filter: ['Prof. John', 'Prof. Jane', 'Prof. Smith', 'Prof. Brown'],
    },
    {
      title: 'Class Quality',
      property: 'classQuality',
      filter: ['1', '2', '3', '4', '5'],
    },
    {
      title: 'Internship',
      property: 'hasInternship',
      filter: ['Yes', 'No'],
    },
    {
      title: 'Favorite Class',
      property: 'favoriteSubject',
      filter: ['Math', 'Science', 'History', 'English'],
    },
    {
        title: 'Class Relevance',
        property: 'classRelevance',
        filter: ['Yes', 'No'],
      },
      {
        title: 'Class Difficulty',
        property: 'classDifficulty',
        filter: ['1', '2', '3', '4', '5'],
      },
      {
        title: 'Hours per Week',
        property: 'hoursPerWeek',
        filter: ['0-5', '5-10', '10-15', '15+'],
      },
    ];

  const chartData = {
    labels: [
      'Class Quality',
      'Internship',
      'Favorite Class',
      'Best Professor',
      'Graduation Date',
    ],
    datasets: [
      {
        label: 'Data',
        data: [
          getCount('classQuality', 'Excellent'),
          getCount('hasInternship', 'Yes'),
          getCount('favoriteSubject', 'Math'),
          getCount('bestProfessor', 'Prof. John'),
          getCount('graduationDate', '2024'),
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          // Remove the 'type' property here
        },
      ],
    },
  };
  return (
    <div className="container">
      <h2 className="text-center mt-4">Class Feedback</h2>
      <div className="row">
        <div className="col-3">
          <select className="form-select mt-4" onChange={handleSubjectChange}>
            <option value="">Filter by Subject</option>
            {/* Add more subjects here */}
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
            <option value="English">English</option>
          </select>
        </div>
        <div className="col-9">
          <div className="charts-container">
            {chartConfigs.map((config) => {
              if (config.property === 'bestProfessor') return null;

              const { chartData, chartColors } = generateChartData(config.property, config.filter);
              return (
                <div className="chart-wrapper" key={config.title}>
                  <h3>{config.title}</h3>
                  <Bar
                    data={{
                      labels: config.filter,
                      datasets: [
                        {
                          label: config.title,
                          data: chartData,
                          backgroundColor: chartColors,
                        },
                      ],
                    }}
                    options={chartOptions}
                  />
                  <p className="chart-description">{config.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 text-center">
          <h3>Best Professor of the Quarter</h3>
          <div className="chart-wrapper chart-wrapper-bigger">
            {chartConfigs.map((config) => {
              if (config.property !== 'bestProfessor') return null;

              const { chartData, chartColors } = generateChartData(config.property, config.filter);
              return (
                <Bar
                  key={config.title}
                  data={{
                    labels: config.filter,
                    datasets: [
                      {
                        label: config.title,
                        data: chartData,
                        backgroundColor: chartColors,
                      },
                    ],
                  }}
                  options={chartOptions}
                />
              );
            })}
            <p className="chart-description">
              {/* Add a customizable description here */}
              This chart shows the votes for the best professor of the quarter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
  
