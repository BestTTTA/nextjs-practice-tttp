import React from "react";
import { SonProps } from "@/types/son";


function Son({ handleClick, label, children }: SonProps) {
  console.log("Son component rendered with children:", children, "and label:", label);
  return (
    <button onClick={() => handleClick(String(children))} className=" rounded-xl p-4 bg-blue-400 hover:bg-blue-500 hover:scale-105">
      {label}: {children}
    </button>
  );
}

export default React.memo(Son);
