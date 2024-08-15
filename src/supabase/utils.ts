import * as auth from "./utils/auth";

export { auth };
import supabase from "@/supabase/initial";

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
    const id = await auth.getUserId();

    const { data: postData, error } = await supabase
      .from("post")
      .insert({ post_type: postType, title, content, user_id: id, post_image: postImage })
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

export async function getMySurveyForm() {
  try {
    const userId = await auth.getUserId();

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
