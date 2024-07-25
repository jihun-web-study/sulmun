import supabase from "@/supabase/initial";

export async function signInWithEmail({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  // 로그인 성공 시 메인페이지로 이동, 임시로 location 객체 사용
  if (!error) location.href = "/";
  else console.log(error.message);
}

export async function signInWithGithub() {
  await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:3000",
    },
  });
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
  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: "http://locahost:3000/",
      data: {
        nickname: nickname,
        avartar_url: null,
      },
    },
  });
  if (error) {
    console.error("회원가입 에러:", error.message);
    return false;
  }

  alert("확인 이메일이 전송되었습니다. 이메일을 확인해주세요.");
}

export async function verifySignUp({
  email,
  token,
}: {
  email: string;
  token: string;
}) {
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
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("user: ", user);
}

export async function getSession() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log("session: ", session);
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
