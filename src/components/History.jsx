import React from "react";

function History() {
  const transactionHistory = () => [
    { _id: 1, title: "Rent", amount: 5000, type: "expense" },
    { _id: 2, title: "Groceries", amount: 2000, type: "expense" },
    { _id: 3, title: "Salary", amount: 50000, type: "income" },
    { _id: 4, title: "Stock Dividends", amount: 1000, type: "income" },
    { _id: 5, title: "Insurance", amount: 2000, type: "expense" },
    { _id: 6, title: "Phone Bill", amount: 300, type: "expense" },
  ];
  const history = transactionHistory();

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
