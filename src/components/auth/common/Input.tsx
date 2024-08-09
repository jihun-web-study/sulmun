import { Dispatch, SetStateAction } from "react";

type InputProps = {
  type: "text" | "password";
  placeholder: string;
  value?: string;
  onChange: Dispatch<SetStateAction<string>>;
};

const Input = ({ type = "text", onChange, placeholder, value }: InputProps) => {
  return (
    <input
      className="w-full h-[50px] border-solid border-[1px] rounded-lg pl-[16px]"
      type={type}
      placeholder={placeholder}
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      autoComplete="off"
    />
  );
};

export default Input;
