"use client";

import { useState, useMemo } from "react";

function UseMemo() {
  const [couterOne, setCounterOne] = useState<number>(0);
  const [couterTwo, setCounterTwo] = useState<number>(0);

  const incrementOne = (): void => {
    setCounterOne(couterOne + 1);
  };

  const incrementTwo = (): void => {
    setCounterTwo(couterTwo + 1);
  };

  // const isEven = (): boolean => {
  //   let i = 0;
  //   while (i < 2000000000) i++;
  //   return couterOne % 2 === 0;
  // };

  const isEven: boolean = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return couterOne % 2 === 0;
  }, [couterOne]);



  return (
    <div>
      <h1 className="text-2xl font-bold">UseMemo</h1>
      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={incrementOne}
        >
          Counter One - {couterOne} - {isEven ? "Even" : "Odd"}
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={incrementTwo}
        >
          Counter Two - {couterTwo}
        </button>
      </div>
    </div>
  );
}

export default UseMemo;
