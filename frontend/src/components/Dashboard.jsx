import { useEffect } from "react";
import Chart from "./Chart";
import History from "./History";
import Nav from "./Nav";
import { useGlobalContext } from "../components/globalContext";

function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, [getIncomes, getExpenses]);

  return (
    <div className="p-6 space-y-6 flex gap-6">
      <Nav />

      <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-lg space-y-6">
        <div className="flex flex-col gap-6 w-full">
          <Chart income={totalIncome()} expense={totalExpenses()} balance={totalBalance()} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700">Total Income</h2>
              <p className="text-2xl font-bold text-green-500">Rs {totalIncome()}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700">Total Expense</h2>
              <p className="text-2xl font-bold text-red-500">Rs {totalExpenses()}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700">Total Balance</h2>
              <p className="text-2xl font-bold text-blue-500">Rs {totalBalance()}</p>
            </div>
          </div>
        </div>

        <div className="history-con space-y-6">
          <History />

          <div className="salary-section">
            <h2 className="text-xl font-semibold text-primary">
              Min <span className="font-bold text-blue-500">Salary</span> & Max{" "}
              <span className="font-bold text-blue-500">Salary</span>
            </h2>
            <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">Min Salary</p>
              <p className="text-lg font-semibold text-green-600">
                ₹{Math.min(...incomes.map((item) => item.amount))}
              </p>
            </div>
            <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mt-4">
              <p className="text-sm text-gray-500">Max Salary</p>
              <p className="text-lg font-semibold text-green-600">
                ₹{Math.max(...incomes.map((item) => item.amount))}
              </p>
            </div>
          </div>

          <div className="expense-section mt-8">
            <h2 className="text-xl font-semibold text-primary">
              Min <span className="font-bold text-red-500">Expense</span> & Max{" "}
              <span className="font-bold text-red-500">Expense</span>
            </h2>
            <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">Min Expense</p>
              <p className="text-lg font-semibold text-red-600">
                ₹{Math.min(...expenses.map((item) => item.amount))}
              </p>
            </div>
            <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mt-4">
              <p className="text-sm text-gray-500">Max Expense</p>
              <p className="text-lg font-semibold text-red-600">
                ₹{Math.max(...expenses.map((item) => item.amount))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
