import supabase from "@/supabase/initial";
import { Provider } from "@supabase/supabase-js";

export async function signInWithEmail({ email, password }: { email: string; password: string }) {
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  // 로그인 성공 시 메인페이지로 이동, 임시로 location 객체 사용
  if (!error) location.href = "/";
  else console.log(error.message);
}

//
export function signInWithOAuth(provider: Provider) {
  return async function () {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: "http://localhost:3000/auth/oauth",
      },
    });

    return { data, error };
  };
}

export async function checkLogin() {
  const authInfo = await supabase.auth.getSession();
  const session = authInfo.data.session;

  console.table({ authInfo, session });

  return session;
}

export async function signUpWithEmail({
  email,
  password,
  nickname,
}: {
  email: string;
  password: string;
  nickname: string;
}) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: "http://locahost:3000",
        data: {
          user_name: nickname,
          avartar_url: null,
        },
      },
    });

    if (error) throw error;

    console.log("회원가입 성공!", data);
    alert("확인 이메일이 전송되었습니다. 이메일을 확인해주세요.");
    return data;
  } catch (error) {
    console.error("회원가입 에러:", error?.message);
  }
}

export async function verifySignUp({ email, token }: { email: string; token: string }) {
  const { error } = await supabase.auth.verifyOtp({
    email: email,
    token: token,
    type: "signup",
  });

  if (error) {
    alert("올바르지 않거나 만료된 토큰입니다.");
    return;
  }

  alert("회원가입이 완료되었습니다!");
  location.href = "/";
}

export async function getUser() {
  const { data, error } = await supabase.auth.getUser();

  return { data, error };
}

export async function getSession() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log("session: ", session);

  return session;
}

export async function resendOTP(email: string) {
  const { error } = await supabase.auth.resend({
    type: "signup",
    email: email,
    options: {
      emailRedirectTo: "https://localhost:3000",
    },
  });

  if (error) console.log(error);
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (!error) return (location.href = "/");

  return error;
}

export async function deleteAccount() {
  const { data, error } = await supabase.rpc("delete_account");

  console.log(data, error);

  if (error) {
    console.error("Error deleting user:", error);
    return;
  }

  console.log("User account deleted successfully:", data);
  localStorage.removeItem("sulmun_auth_key");
  location.href = "/";
}

export async function updateUserInfo(username) {
  try {
    const { data: updateData, error: updateError } = await supabase.auth.updateUser({ data: { user_name: username } });

    if (updateError) throw updateError;

    console.log(`정보수정 성공`, updateData);

    location.reload();
  } catch (error) {
    console.log(error);
  }
}

export async function getUserId() {
  const { data, error: getUserError } = await supabase.auth.getUser();

  if (getUserError) throw getUserError;

  return data.user.id;
}
