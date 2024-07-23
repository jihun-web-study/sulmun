import xSvg from "@/assets/svg/x.svg";
import { Link } from "react-router-dom";

const XButton = () => {
  return (
    <Link to={"/"} className="absolute top-5 right-5">
      <img src={xSvg} alt="닫기버튼" />
    </Link>
  );
};

export default XButton;
