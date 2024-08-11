import { useEffect, useState } from "react";

type ToggleButtonProps = {
  onClick: () => void;
  initialValue: string;
  toggleValue: string;
  initialToggle: boolean;
};

const ToggleButton = ({ onClick, initialToggle = false, initialValue, toggleValue }: ToggleButtonProps) => {
  const [isToggled, setIsToggled] = useState(initialToggle);

  useEffect(() => {
    setIsToggled(initialToggle);
  }, [initialToggle]);

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
