import SignOutBox from "@/components/layout/gridLayout/header/UserInfo/SignOutBox";
import SignInBox from "@/components/layout/gridLayout/header/UserInfo/SignInBox";

import { useAtomValue } from "jotai";
import { userInfoAtom } from "@/store/userStore";

const UserInfo = () => {
  const userInfo = useAtomValue(userInfoAtom);

  console.log("userInfo: ", userInfo);

  return (
    <div className="xl:pr-[60px] h-[80px] flex items-center justify-end pr-4">
      <div className="w-[90%] h-full flex items-center">
        {userInfo ? <SignInBox avartarUrl={userInfo.avatar_url} userName={userInfo.user_name} /> : <SignOutBox />}
      </div>
    </div>
  );
};
export default UserInfo;
