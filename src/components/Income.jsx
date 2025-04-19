import React, { useEffect } from "react";
import Form from "../components/Form";
import IncomeItem from "../components/IncomeItem";
import  { useGlobalContext } from '../components/globalContext'
function Income() {
  const {addIncome,incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    useEffect(() =>{
        getIncomes()
    }, [])

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
