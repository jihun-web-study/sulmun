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
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
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
  try {
    const { data, error } = await supabase.rpc("delete_user");

    if (error) throw error;

    if (data?.success) {
      console.log(data.message);
      // 로그아웃 및 추가적인 클라이언트 측 정리 작업 수행
    } else {
      console.error("Error deleting user:", data.error);
    }
  } catch (error) {
    console.error("Error calling delete_user function:", error.message);
  }
}

export async function fetchAllPosts() {
  const { data, error } = await supabase.rpc("get_all_posts");

  if (error) {
    console.error("Error fetching posts:", error);
    alert("포스트 조회 중 오류가 발생했습니다.");
  } else {
    console.log("All posts:", data);
    // 데이터 처리 로직 추가
    return data;
  }
}

export async function fetchPostById(postId: number) {
  const { data, error } = await supabase.rpc("get_post_by_id", { post_id: postId });

  if (error) {
    console.error("Error fetching post:", error);
    alert("포스트 조회 중 오류가 발생했습니다.");
  } else {
    console.log("Post details:", data);
    // 데이터 처리 로직 추가
  }
}

type CreatePostTypes = {
  title: string;
  description: string;
  type: "normal" | "survey";
};

export async function createPost({ title, description, type }: CreatePostTypes) {
  const { data, error } = await supabase.rpc("create_post", { title, description, type });

  if (error) {
    let errorMessage;

    // 커스텀 에러 메시지 처리
    if (error.message.includes("required fields")) {
      errorMessage = "모든 필드를 입력해야 합니다.";
    } else {
      errorMessage = "포스트 생성 중 오류가 발생했습니다.";
    }

    console.error("Error creating post:", errorMessage);
    alert(errorMessage); // 사용자에게 에러 메시지 알림
  } else {
    console.log("Post created successfully:", data);
    alert("포스트가 성공적으로 생성되었습니다!"); // 성공 메시지
    console.log(data); // { success: true }
  }
}
