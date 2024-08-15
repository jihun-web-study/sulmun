import DropDown from "@/components/auth/common/DropDown";
import { auth } from "@/supabase/utils";
import { useNavigate } from "react-router-dom";

type SignInBoxProps = {
  avartarUrl: string | undefined;
  userName: string;
};

const SignInBox = ({ avartarUrl, userName }: SignInBoxProps) => {
  const navigate = useNavigate();

  const buttonList = [
    { text: "마이페이지", onclick: () => navigate("/mypage") },
    { text: "계정 설정", onclick: () => navigate("/setting") },
    { text: "로그아웃", onclick: auth.signOut },
  ];

  return (
    <DropDown buttonList={buttonList}>
      {avartarUrl ? (
        <img
          src={avartarUrl || ""}
          alt="avartar"
          className="h-9 aspect-square aspect-square rounded-xl border-2 border-[#EEEEEE]"
        />
      ) : (
        <div className="h-6 xl:h-9 aspect-square rounded-lg bg-[#9F9F9F] border border-[#EEEEEE]" />
      )}

      <div className="flex items-center text-xs whitespace-nowrap text-ellipsis overflow-hidden">{userName}</div>
    </DropDown>
  );
};

export default SignInBox;
