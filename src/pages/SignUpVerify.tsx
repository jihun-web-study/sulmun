import { useState } from "react";
import Input from "@/components/auth/common/Input";
import { auth } from "@/supabase/utils";
import { useLocation } from "react-router-dom";

const SignUpVerify = () => {
  const state: { nickname: string; email: string } = useLocation().state;
  const [token, setToken] = useState("");

  if (!state) return (location.href = "/");

  return (
    <form
      className="w-full flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submit!");
        if (state) {
          console.table({
            nickname: state.nickname,
            email: state.email,
            token,
          });
          if (token !== "" && token.length === 6) {
            auth.verifySignUp({ email: state.email, token });
          }
        }
      }}
    >
      <div>
        <span>
          안녕하세요 <strong>{state.nickname || ""}</strong>
          {"님 😀"}
        </span>
      </div>
      <div>
        <span>
          <strong>{state.email || ""}</strong>로 인증코드를 보냈습니다.
        </span>
      </div>
      <Input type="text" placeholder="인증번호" value={token} onChange={setToken} />
      <button type="submit" className="w-full py-5 text-white rounded-[10px] bg-proj-bg-linear">
        인증하고 회원가입 완료하기
      </button>
    </form>
  );
};

export default SignUpVerify;
