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
        emailRedirectTo: "http://locahost:3000/",
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

export async function uploadImage({ fileName, imageFile }: { fileName: string; imageFile: File }) {
  try {
    const { data, error } = await supabase.storage.from("images").upload(fileName, imageFile);

    if (error) throw error;

    // 업로드된 이미지의 공개 URL 가져오기
    const {
      data: { publicUrl },
    } = supabase.storage.from("images").getPublicUrl(fileName);

    return { data, publicUrl };
  } catch (error) {
    console.error("Error uploading image: ", error.message);
  }
}

export type PostingTypes = {
  title: string;
  content: string;
  postType: "normal" | "survey";
  postImage: string | null;
};

// rpc 포스팅
export async function posting_rpc({ postType, title, content, postImage }: PostingTypes) {
  try {
    const { data, error } = await supabase.rpc("create_post", {
      p_post_type: postType,
      p_title: title,
      p_content: content,
      p_post_image: postImage,
    });

    if (error) throw error;

    console.log("포스팅 성공!");
    return true;
  } catch (error) {
    console.log(error);
  }
}

// 포스팅 2
export async function posting({ postType, title, content, postImage }: PostingTypes) {
  try {
    const { data, error: getUserError } = await supabase.auth.getUser();

    if (getUserError) throw getUserError;

    console.log(data);

    const { data: postData, error } = await supabase
      .from("post")
      .insert({ post_type: postType, title, content, user_id: data.user.id, post_image: postImage })
      .select();

    if (error) throw error;

    return postData;
  } catch (error) {
    console.log(error);
  }
}

// 포스트 총 개수
export async function getPostTotalCount() {
  try {
    const { count, error } = await supabase.from("post").select("*", { count: "exact", head: true });

    if (error) throw error;

    console.log(`count 페칭 성공!`, count);
  } catch (error) {
    console.log(error);
  }
}

export async function getFilteredPostsByRange({ filterType, pageNumber, pageSize }) {
  /*
  filter_type: 'all' | 'normal' | 'survey';
  page_number: 1부터 시작;
  page_size: number;
*/
  try {
    const { data, error } = await supabase.rpc("get_filtered_posts_by_limit", {
      filter_type: filterType,
      page_number: pageNumber,
      page_size: pageSize,
    });

    if (error) throw error;

    console.log(`부분 페칭 성공!`, data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostById(postId) {
  try {
    const { data, error } = await supabase.rpc("get_post_by_post_id", { post_id: postId });

    if (error) throw error;

    console.log(`id로 포스트 페칭 성공!`, data);
    return data;
  } catch (error) {
    console.log(error);
  }
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

export async function addComment({ postId, comment }) {
  try {
    const { data, error } = await supabase.rpc("add_comment", {
      post_id: postId, // 댓글을 달 게시물의 ID
      comment_text: comment, // 작성할 댓글
    });

    if (error) throw error;

    console.log(`댓글달기 성공`, data);

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserid() {
  const { data, error: getUserError } = await supabase.auth.getUser();

  if (getUserError) throw getUserError;

  return data.user.id;
}

export async function getMySurveyForm() {
  try {
    const userId = await getUserid();

    const { data: surveyData, error: surveyError } = await supabase
      .from("survey_form")
      .select("*")
      .eq("user_id", userId);

    if (surveyError) throw surveyError;

    return surveyData;
  } catch (error) {
    console.log(error);
  }
}

export async function getMyQuestionForm(surveyId) {
  try {
    const { data: questionData, error: questionError } = await supabase
      .from("question_form")
      .select("*")
      .eq("survey_id", Number(surveyId));

    if (questionError) throw questionError;

    return questionData;
  } catch (error) {
    console.log(error);
  }
}

export async function add_Comment_test() {
  try {
    const post_id = "4f5283c9-0c07-4889-b124-a7571a9adb9c";

    const data = await supabase.rpc("add_comment", { post_id, comment: "id 등록테스트" }).select();

    if (error) throw error;

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function delete_Comment_test(commentId: number) {
  try {
    const { data, error } = await supabase.rpc("delete_comment", { comment_id: commentId });

    if (error) throw error;

    return data;
  } catch (error) {
    console.log("Comment deleted successfully:", error);
  }
}
