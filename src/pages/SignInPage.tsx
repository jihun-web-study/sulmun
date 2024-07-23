import Input from "@/components/auth/common/Input";
import SocialLoginbutton from "@/components/auth/signin/SocialLoginbutton";
import googleLogo from "@/assets/svg/google.svg";
import kakaoLogo from "@/assets/svg/kakao.svg";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <>
      <form
        className="w-full flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit!");
        }}
      >
        <div className="flex gap-4">
          <div className="flex-grow flex flex-col gap-2">
            <Input type="text" placeholder="아이디" />
            <Input type="password" placeholder="비밀번호" />
          </div>
          <button className="w-24 text-white rounded bg-proj-bg-linear">
            로그인
          </button>
        </div>
      </form>
      <div className="my-4">
        <span>계정이 없으신가요?</span>
        <Link
          to={"/auth/signup"}
          className="ml-[16px] text-gray-500 font-bold leading-8 underline decoration-[2px] underline-offset-[4px]"
        >
          회원가입
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <strong className="mb-4">소셜 계정으로 로그인하기</strong>
        <div className="flex gap-3">
          <SocialLoginbutton to={"/"} img={kakaoLogo} alt={"kakao"} />
          <SocialLoginbutton to={"/"} img={googleLogo} alt={"google"} />
        </div>
      </div>
    </>
  );
};

export default SignInPage;
