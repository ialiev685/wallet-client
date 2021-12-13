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

  const makeData = info => {
    const labels = info.map(el => el.name);
    const data = info.map(el => el.sum);
    const backgroundColor = info.map(el => el.hex);
    return {
      labels,
      datasets: [{ data, backgroundColor }],
    };
  };

  //Example data object, must be fetched and received as a prop

  const data = makeData(operations);
  return <Doughnut data={data} options={options} />;
}
