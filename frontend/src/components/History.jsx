import React from "react";
import {useGlobalContext} from '../components/globalContext'
function History() {
  const {transactionHistory} = useGlobalContext()

  const [...history] = transactionHistory()

  return (
    <div>
      <div className=" flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-primary">Recent History</h2>

        {history.map(({ _id, title, amount, type }) => (
          <div
            key={_id}
            className="bg-white border-2 border-white shadow-md p-4 rounded-2xl flex justify-between items-center"
          >
            <p
              className={type === "expense" ? "text-red-500" : "text-green-500"}
            >
              {title}
            </p>

            <p
              className={type === "expense" ? "text-red-500" : "text-green-500"}
            >
              {type === "expense"
                ? `-${Math.max(0, amount)}`
                : `+${Math.max(0, amount)}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
