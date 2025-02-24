import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Counter = ({increment, decrement, count, setCount}) => {

  return (
    <div className="flex items-center gap-4 bg-gray-100 rounded-lg px-4 py-2">
      <button
        onClick={decrement}
        className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
      >
        <FaMinus className="text-gray-700" />
      </button>

      <span className="text-lg font-semibold text-gray-800 min-w-[30px] text-center">
        {count}
      </span>

      <button
        onClick={increment}
        className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
      >
        <FaPlus className="text-gray-700" />
      </button>
    </div>
  );
};

export default Counter;
