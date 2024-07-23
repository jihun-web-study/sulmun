import Input from "@/components/auth/common/Input";
import CheckButton from "@/components/auth/signup/CheckButton";
import SocialLoginbutton from "@/components/auth/signin/SocialLoginbutton";
import googleLogo from "@/assets/svg/google.svg";
import kakaoLogo from "@/assets/svg/kakao.svg";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <form
      className="w-full flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submit!");
      }}
    >
      <div className=" flex flex-grow gap-4">
        <Input type="text" placeholder="이메일" />
        <CheckButton onClick={() => console.log("인증번호 전송")}>
          인증번호 전송
        </CheckButton>
      </div>
      <div className=" flex flex-grow gap-4">
        <Input type="text" placeholder="인증번호" />
        <CheckButton onClick={() => console.log("인증번호 확인")}>
          인증번호 확인
        </CheckButton>
      </div>
      <Input type="password" placeholder="비밀번호" />
      <Input type="password" placeholder="비밀번호 확인" />
      <button
        type="submit"
        className="w-full py-5 text-white rounded-[10px] bg-proj-bg-linear"
      >
        회원가입하기
      </button>
    </form>
  );
};

export default SignUpPage;
