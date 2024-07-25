import { useState } from "react";
import Input from "@/components/auth/common/Input";
import { signUpWithEmail } from "@/supabase/utils";
import { useNavigate } from "react-router-dom";

const SignUpInfo = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  return (
    <form
      className="w-full flex flex-col gap-3"
      onSubmit={async (e) => {
        e.preventDefault();

        if (nickname === "" || email === "") {
          alert("닉네임 또는 이메일을 입력해주세요.");
        } else if (password !== confirmPassword) {
          alert("비밀번호가 일치하지 않습니다.");
        } else if (password === "" || confirmPassword === "") {
          alert("비밀번호 또는 비밀번호 확인란을 입력해주세요.");
        } else {
          console.log("submit!");
          console.table({ nickname, email, password });
          const result = await signUpWithEmail({ nickname, email, password });
          if (!result) {
            navigate("/auth/signup/verify", { state: { nickname, email } });
          }
        }
      }}
    >
      <Input
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={setNickname}
      />

      <Input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={setEmail}
      />

      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={setPassword}
      />
      <Input
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={setConfirmPassword}
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

export default SignUpInfo;
