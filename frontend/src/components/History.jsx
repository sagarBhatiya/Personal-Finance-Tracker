import React from "react";
import { useGlobalContext } from '../components/globalContext';

function History() {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6">
      <h2 className="text-2xl font-semibold text-primary mb-4">Recent History</h2>

      <div className="flex flex-col gap-6">
        {history.map(({ _id, title, amount, type }) => (
          <div
            key={_id}
            className={`bg-white border-2 border-transparent shadow-lg p-5 rounded-2xl flex justify-between items-center transition-transform transform hover:scale-105 ${
              type === "expense" ? "bg-red-100 border-red-300" : "bg-green-100 border-green-300"
            }`}
          >
            <div className="flex flex-col w-full">
              <p className="text-xl font-semibold text-primary">{title}</p>
              <p className="text-sm text-gray-500">Transaction Type: {type}</p>
            </div>

            <div className="flex items-center justify-end w-1/3">
              <p
                className={`text-xl font-semibold ${
                  type === "expense" ? "text-red-600" : "text-green-600"
                }`}
              >
                {type === "expense" ? `-₹${Math.max(0, amount)}` : `+₹${Math.max(0, amount)}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
