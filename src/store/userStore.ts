import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type UserMetadata = {
  user: {
    id: string;
    user_metadata: any; // 추후 타입 수정
  };
};

type LocalStorageData = UserMetadata | null;

export const localStorageAtom = atomWithStorage("sulmun_auth_key", null);

export const userInfoAtom = atom((get) => {
  const localstorageData = get(localStorageAtom) as LocalStorageData;
  if (localstorageData) {
    const userId = localstorageData.user.id;
    const userData = localstorageData.user.user_metadata;

    const output = {
      id: userId,
      isSocial: Boolean(userData.iss),
      email: userData.email,
      user_name: userData.user_name,
      avatar_url: userData.avatar_url,
    };

    return output;
  }

  return null;
});
