import { useEffect } from "react";
import Chart from "./Chart";
import History from "./History";
import Nav from "./Nav";
import { useGlobalContext } from '../components/globalContext';
function Dashboard() {
  const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [getIncomes,getExpenses])
  return (
    <div className="p-8 space-y-6 flex gap-30">
      <Nav />

      <div className="w-[100vw] h-[100vh] bg-gray-100 p-6 rounded-lg shadow-lg space-y-6">
        <div className="flex gap-40 w-[70vw] ">
          <div className="flex flex-col gap-8 ">
            <Chart />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[40vw] flex-wrap">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-700">
                  Total Income
                </h2>
                <p className="text-2xl font-bold text-green-500">Rs {totalIncome()}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-700">
                  Total Expense
                </h2>
                <p className="text-2xl font-bold text-red-500">Rs {totalExpenses()}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-700">
                  Total Balance
                </h2>
                <p className="text-2xl font-bold text-blue-500">Rs {totalBalance()}</p>
              </div>
            </div>
          </div>
          <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ₹{Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                ₹{Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ₹{Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                ₹{Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
