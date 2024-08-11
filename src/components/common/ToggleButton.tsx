import { useState } from "react";

type ToggleButtonProps = {
  onClick: () => void;
  initialValue: string;
  toggleValue: string;
};

const ToggleButton = ({ onClick, initialValue, toggleValue }: ToggleButtonProps) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    onClick();
  };

  return (
    <button
      className={`w-24 h-10 flex items-center justify-between rounded-full p-1 ${
        isToggled ? "bg-blue-500" : "bg-gray-300"
      }`}
      onClick={handleToggle}
    >
      {!isToggled && <span className="flex-grow text-xs font-bold">{initialValue}</span>}
      <div className="bg-white w-8 h-8 rounded-full shadow-md transform duration-300 ease-in-out">
        {/* <span className="text-xs font-semibold">{isToggled ? "ON" : "OFF"}</span> */}
      </div>
      {isToggled && <span className="flex-grow text-xs text-white font-bold">{toggleValue}</span>}
    </button>
  );
};

export default ToggleButton;
