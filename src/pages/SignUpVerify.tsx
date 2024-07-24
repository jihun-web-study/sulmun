import { useState } from "react";
import Input from "@/components/auth/common/Input";
import { verifySignUp } from "@/supabase/utils";
import { useLocation } from "react-router-dom";

const SignUpVerify = () => {
  const {
    state: { nickname, email },
  } = useLocation();

  const [token, setToken] = useState("");

  return (
    <form
      className="w-full flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submit!");
        console.table({ nickname, email, token });
        if (token !== "" && token.length === 6) {
          verifySignUp({ email, token });
        }
      }}
    >
      <div>
        <span>
          안녕하세요 <strong>{nickname}</strong>
          {" 😀"}
        </span>
      </div>
      <div>
        <span>
          <strong>{email}</strong>로 인증코드를 보냈습니다.
        </span>
      </div>
      <Input
        type="text"
        placeholder="인증번호"
        value={token}
        onChange={setToken}
      />
      <button
        type="submit"
        className="w-full py-5 text-white rounded-[10px] bg-proj-bg-linear"
      >
        회원가입하기
      </button>
    </form>
  );
};

export default SignUpVerify;
