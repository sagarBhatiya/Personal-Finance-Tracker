import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
ChartJs.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

function Chart() {
  const data = {
    labels: ["Income", "Expense", "Balance"],
    datasets: [
      {
        label: "Transaction Breakdown",
        data: [50, 100, 200],
        backgroundColor: ["#4CAF50", "#F44336", "#2196F3"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <>
      <div className="w-[40vw] h-[48vh]">
        <Doughnut data={data} />
      </div>
    </>
  );
}

export default Chart;
