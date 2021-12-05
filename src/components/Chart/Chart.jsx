import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  cutout: '70%',
  borderWidth: 0,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      displayColors: false,
    },
  },
};

export default function Chart({ operations }) {
  //Example function to turn array of objects from props to data object

  // const makeData = (info) => {
  //   const labels = info.map((el) => el.operationName);
  //   const data = info.map((el) => el.operationSum);
  //   const backgroundColor = info.map((el) => el.operationColor);
  //   return {
  //     labels,
  //     datasets: [
  //       data,
  //       backgroundColor,
  //     ]
  //   }
  // }

  //Example data object, must be fetched and received as a prop

  const data = {
    labels: [
      'Yellow eye',
      'Someones skin',
      'Pink paradise',
      'Mystic light',
      'Purple bruise',
      'Kidding me',
      'Blue Heiku',
      'Green snake',
      'Orange wish',
    ],
    datasets: [
      {
        data: [1200, 900, 1900, 2000, 1500, 2000, 2500, 1750, 1000],
        backgroundColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          '#C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
      },
    ],
  };

  return <Doughnut data={data} options={options} />;
}
