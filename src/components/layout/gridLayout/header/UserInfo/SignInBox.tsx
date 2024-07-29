import DropDown from "@/components/auth/common/DropDown";
import { signOut } from "@/supabase/utils";
import { useNavigate } from "react-router-dom";

type SignInBoxProps = {
  avartarUrl: string;
  userName: string;
};

const SignInBox = ({ avartarUrl, userName }: SignInBoxProps) => {
  const navigate = useNavigate();

  const buttonList = [
    { text: "마이페이지", onclick: () => navigate("/mypage") },
    { text: "로그아웃", onclick: signOut },
  ];

  return (
    <DropDown buttonList={buttonList}>
      {avartarUrl ? (
        <img
          src={avartarUrl || ""}
          alt="avartar"
          className="h-[80%] aspect-square rounded-xl border-2 border-[#EEEEEE]"
        />
      ) : (
        <div className="h-[80%] aspect-square rounded-lg bg-[#9F9F9F] border border-[#EEEEEE]" />
      )}

      <span className="text-ellipsis overflow-hidden">{userName}</span>
    </DropDown>
  );
};

export default SignInBox;
