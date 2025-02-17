import React, { useState } from "react";

const Controls = ({ setArray, setAlgorithm, startSorting }) => {
  const [size, setSize] = useState(20);

  const generateArray = () => {
    let arr = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
    setArray(arr);
  };

  return (
    <div className="flex gap-4 p-4">
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        min="5"
        max="100"
        className="border p-2"
      />
      <button onClick={generateArray} className="p-2 bg-blue-500 text-white">Generate Array</button>
      <select onChange={(e) => setAlgorithm(e.target.value)} className="p-2 border">
        <option value="bubbleSort">Bubble Sort</option>
        <option value="selectionSort">Selection Sort</option>
      </select>
      <button onClick={startSorting} className="p-2 bg-green-500 text-white">Sort</button>
    </div>
  );
};

export default Controls;
