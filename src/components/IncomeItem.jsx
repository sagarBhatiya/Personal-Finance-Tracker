import React from "react";
import { dateFormat } from "../utils/dateFormat";
import {
  bitcoin,
  book,
  calender,
  card,
  circle,
  clothing,
  comment,
  food,
  freelance,
  medical,
  money,
  piggy,
  stocks,
  takeaway,
  trash,
  tv,
  users,
  yt,
} from "../utils/Icons";

function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  type,
}) {
  const categoryIcon = () => {
    switch (category) {
      case "salary":
        return money;
      case "freelancing":
        return freelance;
      case "investments":
        return stocks;
      case "stocks":
        return users;
      case "bitcoin":
        return bitcoin;
      case "bank":
        return card;
      case "youtube":
        return yt;
      case "other":
        return piggy;
      default:
        return "";
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case "education":
        return book;
      case "groceries":
        return food;
      case "health":
        return medical;
      case "subscriptions":
        return tv;
      case "takeaways":
        return takeaway;
      case "clothing":
        return clothing;
      case "travelling":
        return freelance;
      case "other":
        return circle;
      default:
        return "";
    }
  };

  return (
    <div className="bg-pink-100 border-2 border-white shadow-md rounded-2xl p-4 mb-4 flex items-center gap-4 w-full text-gray-800">
      <div className="w-20 h-20 rounded-2xl bg-gray-200 flex items-center justify-center border-2 border-white text-3xl">
        {type === "expense" ? expenseCatIcon() : categoryIcon()}
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <h5 className="text-lg font-semibold pl-6 relative">
          {title}
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-green-500"></span>
        </h5>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6 text-gray-600">
            <p className="flex items-center gap-1">Rs {amount}</p>
            <p className="flex items-center gap-1">
              {calender} {dateFormat(date)}
            </p>
            <p className="flex items-center gap-1">
              {comment} {description}
            </p>
          </div>
          <button
            className="p-4 rounded-full bg-green-500 text-white hover:bg-green-600"
            onClick={() => deleteItem(id)}
          >
            {trash}
          </button>
        </div>
      </div>
    </div>
  );
}

export default IncomeItem;
