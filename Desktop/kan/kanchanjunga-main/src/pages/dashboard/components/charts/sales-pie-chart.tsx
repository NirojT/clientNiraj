import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
// register plugins
ChartJS.register(ArcElement, Tooltip, Legend);

const SalesPieChart = () => {
  // chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "left" as const,
      },
      title: {
        display: false,
        text: "Analytics",
      },
    },
  };
  // chart data -> dummy data
  //todo: use the data from the backend
  const data = {
    labels: ["Burger", "Pizza", "Momo", "Wings", "Coke", "Cake"],
    datasets: [
      {
        label: "Sold",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="bg-[#2e2e2e text-[#efefef] py-3 flex- w-[100%] h-[15em] rounded cursor-pointer hover:bg-[#3f3f3f mt-3 @[1000px]:h-[20em] flex justify-center">
        {/* the pie chart */}
        <Pie data={data} options={options} />
      </div>
    </>
  );
};

export default SalesPieChart;
