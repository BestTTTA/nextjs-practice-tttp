"use client";

import Button from "@/app/ui/Button";
import { useState, useEffect } from "react";

export default function UseButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log("Effect triggered on mount");
  }, []);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log("Button is:", isOpen ? "Open" : "Closed");
  }, [isOpen]);

  return (
    <div className="flex flex-col gap-2">
      <Button label={isOpen ? "Close" : "Open"} onClick={toggleButton} />
    </div>
  );
}
