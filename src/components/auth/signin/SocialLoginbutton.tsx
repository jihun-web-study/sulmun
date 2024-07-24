import githubLogo from "@/assets/svg/github.svg";
import googleLogo from "@/assets/svg/google.svg";
import kakaoLogo from "@/assets/svg/kakao.svg";

type SocialProps = {
  onClick: () => void;
  socialType: "kakao" | "google" | "github";
};

const SocialLoginbutton = ({ onClick, socialType }: SocialProps) => {
  const socialTypes = {
    github: { src: githubLogo, bg: "bg-[#262626]", alt: "github" },
    google: { src: googleLogo, bg: "bg-[#EDEDED]", alt: "google" },
    kakao: { src: kakaoLogo, bg: "bg-[#FFEB3B]", alt: "kakao" },
  };

  const defaultOnClick = () => {
    console.log(`${socialType} clicked`);
  };

  return (
    <button
      onClick={onClick || defaultOnClick}
      className={`w-[60px] h-[50px] flex justify-center items-center ${socialTypes[socialType].bg} rounded-[10px]`}
    >
      <img
        src={socialTypes[socialType].src}
        alt={socialTypes[socialType].alt}
      />
    </button>
  );
};

export default SocialLoginbutton;
