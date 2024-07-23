import { Link } from "react-router-dom";

type SocialProps = {
  to: string;
  img: string;
  alt: "kakao" | "google";
  bgColor?: "FFEB3B" | "EDEDED";
};

const SocialLoginbutton = ({ to, img, alt, bgColor }: SocialProps) => {
  return (
    <Link
      to={to}
      className={`w-[60px] h-[50px] flex justify-center items-center ${
        alt === "kakao" ? "bg-[#FFEB3B]" : "bg-[#EDEDED]"
      } rounded-[10px]`}
    >
      <img src={img} alt={`${alt} 로그인`} />
    </Link>
  );
};

export default SocialLoginbutton;
