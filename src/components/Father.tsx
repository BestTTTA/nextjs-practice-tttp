"use client";

import { useState, useCallback, useMemo } from "react";
import Son from "./Son";

function Father() {
  const [age, setAge] = useState<number>(15);
  const [salary, setSalary] = useState<number>(100000);

//   const incrementAge = (): void => {
//     setAge(age + 1);
//   };
//   const incrementSalary = (): void => {
//     setSalary(salary + 1000);
//   };

    const incrementAge = useCallback((): void => {
      setAge(age + 1);
    }, [age]);
    const incrementSalary = useCallback((): void => {
      setSalary(salary + 1000);
    }, [salary]);

  return (
    <div className=" flex flex-col justify-center border-6 border-double border-pink-900 rounded-xl p-4 bg-pink-100">
      <div>Father</div>

      <p className="text-gray-600">Age: {age}</p>
      <Son handleClick={incrementAge} label="Age">
        {age}
      </Son>

      <p className="text-gray-600">Salary: {salary}</p>
      <Son handleClick={incrementSalary} label="Salary">
        {salary}
      </Son>
    </div>
  );
}

export default Father;
