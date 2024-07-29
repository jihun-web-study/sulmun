import { useEffect, useState } from "react";
import { getUser } from "@/supabase/utils";
import { User } from "@supabase/supabase-js";

import SignOutBox from "@/components/layout/gridLayout/header/UserInfo/SignOutBox";
import SignInBox from "@/components/layout/gridLayout/header/UserInfo/SignInBox";

type UserInfoType = {
  provider: string | undefined;
  email: string;
  nickname: string;
  avatarUrl: string;
} | null;

type MetadataType = {
  app_metadata: { provider: string };
  user_metadata: { email: string; nickname: string };
};

type UserType = User | null | MetadataType;

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfoType>(null);
  const [isSignin, setIsSignin] = useState(null);

  useEffect(() => {
    (async function getUserInfo() {
      const user: UserType = await getUser();
      console.log("useEffect", user);

      if (user) {
        const [app_metadata, user_metadata] = [
          user["app_metadata"],
          user["user_metadata"],
        ];

        const nickname =
          app_metadata.provider === "email" ? "nickname" : "user_name";

        setUserInfo({
          provider: app_metadata["provider"],
          email: user_metadata["email"],
          nickname: user_metadata[nickname],
          avatarUrl: user_metadata["avatar_url"],
        });
      }
    })();

    return;
  }, []);

  console.log(userInfo);

  return (
    <div className="xl:pr-[60px] h-[80px] flex items-center justify-end pr-4">
      {userInfo ? (
        <SignInBox
          avartarUrl={userInfo.avatarUrl}
          userName={userInfo.nickname}
        />
      ) : (
        <SignOutBox />
      )}
    </div>
  );
};
export default UserInfo;
