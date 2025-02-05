import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import SocialLoginbutton from "@/components/auth/signin/SocialLoginbutton";
import { api } from "@/supabase/utils";

const SignInPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = event;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <>
      <form
        className="w-full flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit!");
          api.auth.signInWithEmail(form);
        }}
      >
        <div className="flex gap-4">
          <div className="flex-grow flex flex-col gap-2">
            <input
              className="w-full h-[50px] border-solid border-[1px] rounded-lg pl-[16px]"
              type="text"
              name="email"
              placeholder="아이디"
              value={form.email}
              onChange={onInputChange}
            />
            <input
              className="w-full h-[50px] border-solid border-[1px] rounded-lg pl-[16px]"
              type="password"
              name="password"
              placeholder="비밀번호"
              value={form.password}
              onChange={onInputChange}
            />
          </div>
          <button className="w-24 text-white rounded bg-proj-bg-linear">로그인</button>
        </div>
      </form>

      <div className="my-4">
        <span>계정이 없으신가요?</span>
        <Link
          to={"/auth/signup/info"}
          className="ml-[16px] text-gray-500 font-bold leading-8 underline decoration-[2px] underline-offset-[4px]"
        >
          회원가입
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <strong className="mb-4">소셜 계정으로 로그인하기</strong>
        <div className="flex gap-3">
          <SocialLoginbutton socialType={"kakao"} onClick={api.auth.signInWithOAuth("kakao")} />
          <SocialLoginbutton socialType={"google"} onClick={() => alert("구글 로그인은 아직 미구현입니다.")} />
          <SocialLoginbutton socialType={"github"} onClick={api.auth.signInWithOAuth("github")} />
        </div>
      </div>
    </>
  );
};

export default SignInPage;
