import React from "react";

const Button = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button
      className={`bg-[#FCAF17] rounded-lg py-[11px] px-4 text-black whitespace-nowrap cursor-pointer hover:bg-[#FCAF17]/80 shadow-inner active:shadow-red-500 active:translate-y-0.5 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
