import { Link } from "react-router-dom";
import PostingIcon from "@/assets/svg/posting.svg";

const HomePostingButton = () => {
  return (
    <Link to={"/posting"} className="flex items-center w-full h-12 pl-5 bg-white rounded-3xl">
      <PostingIcon />
      <span className="ml-4 mt-[1px] text-sm  text-[#999999] d">포스트 작성하러 가기</span>
    </Link>
  );
};

export default HomePostingButton;
