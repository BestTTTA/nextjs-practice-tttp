"use client";
import Button from "@/app/ui/Button";
import { useState } from "react";

export default function UseButton() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  const click = () => {
    console.log("click");
  };

  return (
    <div className="flex flex-col gap-2">
      <Button label="Click Me" onClick={click} />
      <Button label="Click Increment" onClick={increment} />
    </div>
  );
}
