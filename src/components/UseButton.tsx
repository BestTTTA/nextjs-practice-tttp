"use client";

import Button from "@/app/ui/Button";
import { useState,useEffect } from "react";

export default function UseButton() {
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    console.log("useEffect", count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div className="flex flex-col gap-2">
      <Button label="Click Increment" onClick={increment} />
    </div>
  );
}
