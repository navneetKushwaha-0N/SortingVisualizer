import React, { useState } from "react";
import { bubbleSort, selectionSort } from "/Users/mollenmist/Desktop/sorting-visualizer/src/Component/SortingAlgorithms.js";
import Controls from "./Controls";
import Chart from "./Chart";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [algorithm, setAlgorithm] = useState("bubbleSort");

  const startSorting = async () => {
    if (algorithm === "bubbleSort") await bubbleSort(array, setArray);
    else if (algorithm === "selectionSort") await selectionSort(array, setArray);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <Controls setArray={setArray} setAlgorithm={setAlgorithm} startSorting={startSorting} />
      <Chart array={array} />
    </div>
  );
};

export default SortingVisualizer;
