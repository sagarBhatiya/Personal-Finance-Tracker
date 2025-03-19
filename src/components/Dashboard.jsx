import Chart from "./Chart";
import History from "./History";
import Nav from "./Nav";

function Dashboard() {
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
                <p className="text-2xl font-bold text-green-500">Rs 50</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-700">
                  Total Expense
                </h2>
                <p className="text-2xl font-bold text-red-500">Rs 100</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-700">
                  Total Balance
                </h2>
                <p className="text-2xl font-bold text-blue-500">Rs 200</p>
              </div>
            </div>
          </div>
          <History />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
