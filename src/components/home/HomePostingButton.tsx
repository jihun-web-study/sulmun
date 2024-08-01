import { Link } from "react-router-dom";
import postingImg from "@/assets/svg/posting.svg";

const HomePostingButton = () => {
  return (
    <Link to={"/posting"} className="w-full h-[44px] flex items-center pl-5 bg-white rounded-3xl">
      <img src={postingImg} alt="posting" />
      <span className="ml-4 mt-[1px] text-base text-[#999999]">포스트를 작성해주세요</span>
    </Link>
  );
};

export default HomePostingButton;
