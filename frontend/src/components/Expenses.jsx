import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import IncomeItem from "../components/IncomeItem";
import { useEffect } from "react";
import { useGlobalContext } from "../components/globalContext";
function Expenses() {
  const {addIncome,expenses, getExpenses, deleteExpense, totalExpenses} = useGlobalContext()

  useEffect(() =>{
      getExpenses()
  }, [])

  return (
    <div className="flex flex-col overflow-auto p-6">
      <h1 className="text-3xl font-bold text-center">Expenses</h1>
      <h2 className="text-2xl flex justify-center items-center bg-gray-100 border-2 border-white shadow-md rounded-2xl p-4 my-4">
        Total Expense:
        <span className="text-3xl font-extrabold text-green-600 ml-2">
        ${totalExpenses()}
        </span>
      </h2>
      <div className="flex gap-8">
        <div className="w-1/3">
          <ExpenseForm />
        </div>
        <div className="flex-1 space-y-4">
          {expenses.map(
            ({ id, title, amount, date, category, description, type }) => (
              <IncomeItem
                key={id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Expenses;
