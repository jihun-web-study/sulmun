import { api } from "@/supabase/utils";

const SettingPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <strong>SettingPage</strong>
      <button onClick={api.auth.deleteAccount}>계정 탈퇴하기</button>
    </div>
  );
};

export default SettingPage;
