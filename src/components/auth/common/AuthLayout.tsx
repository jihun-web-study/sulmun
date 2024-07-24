import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import XButton from "@/components/auth/common/XButton";
import BackToLogin from "@/components/auth/common/BackToLogin";

const AuthLayout = () => {
  const lastPathName = useLocation().pathname.split("/").at(-1);

  return (
    <div className="w-full h-full bg-[#666666] flex justify-center items-center">
      <div className="w-[50%] max-w-[666px] h-[auto] p-[4%] pt-[6%] bg-white flex flex-col justify-center relative">
        {lastPathName === "signup" && <BackToLogin />}
        <XButton />
        <div className="pt-10 mb-4 proj-color font-bold text-3xl">
          <span className="text-proj-color">SULMUN</span>{" "}
          {lastPathName === "signin" ? "로그인" : "회원가입"}
        </div>

        {/* 각 페이지 */}
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
