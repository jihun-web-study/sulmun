import supabase from "@/supabase/initial";
import { api } from "@/supabase/utils";
import { UUID } from "crypto";

// 포스트 총 개수
export async function getPostTotalCount() {
  try {
    const { count, error } = await supabase.from("post").select("*", { count: "exact", head: true });

    if (error) throw error;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostTotalCountByType(type) {
  try {
    const { data: count, error } = await supabase.rpc("get_post_count", { type });

    if (error) throw error;

    return count;
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

    return data;
  } catch (error) {
    console.log(error);
  }
}

// 특정 포스트 가져오기 // 설문지 안가져옴
export async function getPostById(postId) {
  try {
    const { data, error } = await supabase.rpc("get_post_by_post_id", { post_id: postId });

    if (error) throw error;

    return data;
  } catch (error) {
    console.log(error);
  }
}

// 특정 포스트 가져오기 // 설문지 가져옴
export async function getPostByIdWithSurvey(postId) {
  try {
    const { data, error } = await supabase.rpc("get_post_by_id_with_survey", { post_id: postId });

    if (error) throw error;

    return data;
  } catch (error) {
    console.log(error);
  }
}

/* COMMENT FUNCTIONS */
export async function addComment({ postId, comment }: { postId: UUID; comment: string }) {
  try {
    //const post_id = "4f5283c9-0c07-4889-b124-a7571a9adb9c";
    //const comment = "id 등록테스트"

    const { data, error } = await supabase.rpc("add_comment", { post_id: postId, comment }).select();

    if (error) throw error;

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteComment(commentId: number) {
  try {
    const { data, error } = await supabase.rpc("delete_comment", { comment_id: commentId });

    if (error) throw error;

    return data;
  } catch (error) {
    console.log("Comment deleted successfully:", error);
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

    return { publicUrl };
  } catch (error) {
    console.error("Error uploading image: ", error.message);
  }
}

export type PostingTypes = {
  title: string;
  content: string;
  postType: "normal" | "survey";
  postImage: string | null;
  surveyId?: number;
};

type test = Pick<PostingTypes, "title" | "content">;

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
export async function postingNormal({ postType, title, content, postImage }: PostingTypes) {
  try {
    const id = await api.auth.getUserId();

    const { data: postData, error } = await supabase
      .from("post")
      .insert({ post_type: postType, title, content, user_id: id })
      .select();

    console.log("success", postData);

    if (error) throw error;

    return postData;
  } catch (error) {
    console.log(error);
  }
}

// 설문지 타입과 함께
export async function postingWithSurvey({ postType, title, content, postImage, surveyId }: PostingTypes) {
  try {
    const { data, error } = await supabase.rpc("create_post_with_survey", {
      post_type: postType,
      title: title,
      content: content,
      post_image: postImage,
      input_survey_id: surveyId,
    });

    if (error) throw error;

    console.log("포스팅 성공!");
    console.log(data);
    return true;
  } catch (error) {
    console.log(error);
  }
}
