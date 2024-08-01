import { useEffect, useState } from "react";

import SignOutBox from "@/components/layout/gridLayout/header/UserInfo/SignOutBox";
import SignInBox from "@/components/layout/gridLayout/header/UserInfo/SignInBox";

type UserInfoTypes = null | {
  isSocial: boolean;
  email: string;
  user_name: string;
  avatar_url: string | undefined;
};

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfoTypes>(null);
  //const [isSignin, setIsSignin] = useState(null);

  useEffect(() => {
    const localStorageData = localStorage.getItem("sulmun_auth_key");
    if (localStorageData) {
      const userData = JSON.parse(localStorageData).user.user_metadata;

      const output = {
        isSocial: Boolean(userData.iss),
        email: userData.email,
        user_name: userData.iss ? userData.user_name : userData.nickname,
        avatar_url: userData.avatar_url,
      };

      setUserInfo(output);
    }
  }, []);

  return (
    <div className="xl:pr-[60px] h-[80px] flex items-center justify-end pr-4">
      {userInfo ? <SignInBox avartarUrl={userInfo.avatar_url} userName={userInfo.user_name} /> : <SignOutBox />}
    </div>
  );
};
export default UserInfo;
