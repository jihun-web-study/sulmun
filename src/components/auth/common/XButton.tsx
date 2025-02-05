import CloseIcon from "@/assets/svg/x.svg";
import { Link } from "react-router-dom";

const XButton = () => {
  return (
    <Link to={"/"} className="absolute text-gray-500 transition-all duration-300 top-5 right-5 hover:text-black">
      <CloseIcon aria-label="닫기버튼" />
    </Link>
  );
};

export default XButton;
