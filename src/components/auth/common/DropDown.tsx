import { useState, useRef, useEffect } from "react";
import DropDownListButton from "@/components/auth/common/DropDown/DropDownListButton";

type DropDownProps = {
  children: React.ReactNode;
  buttonList: { text: string; onclick: () => void }[];
};

const DropDown = ({ children, buttonList }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (dropdownRef.current) {
      setDropdownHeight(dropdownRef.current.scrollHeight);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative text-left w-[85%] lg:w-4/5 max-w-[150px] h-[62.5%] rounded-xl">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="flex justify-between items-center w-full h-full px-2 text-sm font-medium text-[#666666] bg-white border border-[#EEEEEE] rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        {children}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        >
          <path
            d="M6.00002 8C6.20002 8 6.40002 7.9 6.50002 7.8L9.80002 4.5C10.1 4.2 10.1 3.7 9.80002 3.4C9.50002 3.1 9.00002 3.1 8.70002 3.4L6.00002 6.1L3.30002 3.4C3.00002 3.1 2.50002 3.1 2.20002 3.4C1.90002 3.7 1.90002 4.2 2.20002 4.5L5.40002 7.7C5.60002 7.9 5.80002 8 6.00002 8Z"
            fill="#666666"
          />
        </svg>
      </button>

      <div
        className={`w-full absolute left-0 mt-2 overflow-hidden max-h-[${
          isOpen ? `${dropdownHeight}px` : "0px"
        }] opacity-[${isOpen ? 100 : 0}] ${isOpen ? "visible" : "hidden"}`}
      >
        <div
          ref={dropdownRef}
          className="bg-red-400 py-1 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          {buttonList?.map(({ text, onclick }, idx) => (
            <DropDownListButton
              key={idx}
              text={text}
              onClick={() => {
                setIsOpen(false);
                onclick();
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
