import { auth } from "@/supabase/utils";

const SettingPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <strong>SettingPage</strong>
      <button onClick={auth.deleteAccount}>계정 탈퇴하기</button>
    </div>
  );
};

export default SettingPage;
