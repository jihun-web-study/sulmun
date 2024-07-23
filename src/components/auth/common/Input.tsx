import React from "react";

type InputProps = {
  type: "text" | "password";
  placeholder: string;
  value?: string;
};

const Input = ({ type = "text", placeholder, value }: InputProps) => {
  return (
    <input
      className="w-full h-[50px] border-solid border-[1px] rounded-[10px] pl-[16px]"
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
