import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { plus } from "../utils/Icons";
import { useGlobalContext } from "../components/globalContext";

function ExpenseForm() {
  const { addExpense, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError(""); // Clear any previous errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (!title || !amount || !date || !category) {
      setError("All fields are required!");
      return;
    }

    if (isNaN(amount) || parseFloat(amount) <= 0) {
      setError("Amount must be a positive number!");
      return;
    }

    // Add the expense
    addExpense({
      title,
      amount: parseFloat(amount), // Ensure amount is a number
      date,
      category,
      description,
    });

    // Reset the form after successful submission
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-white p-6 shadow-md rounded-lg"
    >
      <input
        type="text"
        value={title}
        placeholder="Expense Title"
        onChange={handleInput("title")}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        value={amount}
        placeholder="Expense Amount"
        onChange={handleInput("amount")}
        className="border p-2 rounded w-full"
      />
      <DatePicker
        selected={date}
        placeholderText="Enter A Date"
        dateFormat="dd/MM/yyyy"
        onChange={(date) => setInputState({ ...inputState, date })}
        className="border p-2 rounded w-full"
      />
      <select
        value={category}
        onChange={handleInput("category")}
        className="border p-2 rounded w-full"
      >
        <option value="" disabled>
          Select Option
        </option>
        <option value="education">Education</option>
        <option value="groceries">Groceries</option>
        <option value="health">Health</option>
        <option value="subscriptions">Subscriptions</option>
        <option value="takeaways">Takeaways</option>
        <option value="clothing">Clothing</option>
        <option value="travelling">Travelling</option>
        <option value="other">Other</option>
      </select>
      <textarea
        value={description}
        placeholder="Add A Reference"
        onChange={handleInput("description")}
        className="border p-2 rounded w-full h-24"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white p-3 rounded flex items-center justify-center gap-2 hover:bg-blue-600"
      >
        {plus}Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
