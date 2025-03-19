import React, { useState } from "react";
import Form from "../components/Form";
import IncomeItem from "../components/IncomeItem";

function Income() {
  const [incomes, setIncomes] = useState([
    {
      _id: 1,
      title: "Freelance Work",
      amount: 4500,
      date: "2025-03-01",
      category: "Salary",
      description: "Payment from client",
      type: "income",
    },
    {
      _id: 2,
      title: "Stock Dividends",
      amount: 2200,
      date: "2025-03-05",
      category: "Investment",
      description: "Quarterly dividends",
      type: "income",
    },
  ]);

  const totalIncome = () => {
    return incomes.reduce((acc, curr) => acc + curr.amount, 0);
  };

  const deleteIncome = (id) => {
    setIncomes(incomes.filter((income) => income._id !== id));
  };

  return (
    <div className="flex flex-col p-6">
      <h1 className="text-3xl font-bold mb-4">Incomes</h1>
      <h2 className="flex justify-center items-center bg-pink-100 border-2 border-white shadow-md rounded-2xl p-4 my-4 text-2xl gap-2">
        Total Income:{" "}
        <span className="text-3xl font-extrabold text-green-500">
          Rs{totalIncome()}
        </span>
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <Form />
        </div>
        <div className="flex-1">
          {incomes.map(
            ({ _id, title, amount, date, category, description, type }) => (
              <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                indicatorColor="var(--color-green)"
                deleteItem={deleteIncome}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Income;
