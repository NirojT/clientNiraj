import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// registering the chartjs plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
//  chart options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Analytics",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 1000,
      //   ticks: {
      //     clallback: function (value: any) {
      //       if (value === 0) return value;
      //       return `Rs. ${value}`;
      //     },
      //   },
    },
  },
};
// dummy data
const SalesLineChart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: [500, 350, 447, 270, 700, 500, 400],
        borderColor: "#585858",
        backgroundColor: "#585858",
        tension: 0.5,
        pointBackgroundColor: "#585858",
        pontStyle: "star",
      },
    ],
  };
  return (
    <>
      <div className="bg-[#2e2e2e text-[#efefef] flex- w-[100%] h-[15em] rounded cursor-pointer hover:bg-[#3f3f3f mt-3 lg:mt-0 @[1000px]:h-[20em] ">
        {/* the line chart */}
        <Line options={options} data={data} className="" />
      </div>
    </>
  );
};

export default SalesLineChart;
