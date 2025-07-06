"use client";

import Button from "@/app/ui/Button";
import { useState, useEffect } from "react";

import Image from "next/image";

export default function UseButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log("Effect triggered on mount");
  }, []);

  useEffect(() => {
    console.log("Button is:", isOpen ? "Open" : "Closed");
  }, [isOpen]);

  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray-600">{isOpen.toString()}</p>

      <Button label={isOpen ? "Close" : "Open"} onClick={toggleButton} />

      {isOpen && (
        <div className="flex flex-col items-center">
          <Image
            src="/images/test.jpg"
            alt="Next.js Logo"
            width={200}
            height={200}
          />
          <p className="text-gray-600">This is a test image</p>
        </div>
      )}
    </div>
  );
}
