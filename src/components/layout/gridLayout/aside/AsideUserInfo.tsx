import { userInfoAtom } from "@/store/userStore";
import { useAtomValue } from "jotai";
import { auth } from "@/supabase/utils";

const AsideUserInfo = () => {
  const userInfo = useAtomValue(userInfoAtom);

  return (
    <section className="w-full h-auto flex flex-col gap-3">
      <strong className="text-base">내 정보</strong>
      <div className="w-full h-auto flex justify-between px-2 xl:px-4 py-4  rounded-lg bg-[#94C5C5] text-white text-sm">
        <span>
          <strong>{userInfo?.user_name}</strong>님
        </span>
        <button onClick={auth.signOut} className="font-normal underline decoration-[1px] underline-offset-[3px]">
          로그아웃
        </button>
      </div>
    </section>
  );
};

export default AsideUserInfo;
