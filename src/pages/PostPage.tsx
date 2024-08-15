import BreadCrumb from "@/components/common/BreadCrumb";
import { useLocation } from "react-router-dom";
import PostAuthor from "@/components/auth/common/PostAuthor";
import { useEffect, useState } from "react";

import WriteComment from "@/components/post/WriteComment";
import NormalTypePost from "@/components/post/NormalTypePost";
import SurveyTypePost from "@/components/post/SurveyTypePost";
import PostComment from "@/components/post/PostComment";
import { api } from "@/supabase/utils";
import { UUID } from "crypto";

type PostType = {
  avatar_url: string;
  title: string;
  content: string;
  post_image: string | undefined;
  post_type: "normal" | "survey;";
  user_id: UUID;
  user_name: string;
  id: UUID;
  comments: {
    comment: string;
    avatar_url: string;
    comment_id: UUID;
    updated_at: string;
    commenter_id: UUID;
    commenter_name: string;
  }[];
  updated_at: string;
};

const PostPage = () => {
  const postID = useLocation().pathname.split("/post/").at(-1) as UUID;
  const [post, setPost] = useState<PostType | null>(null);
  const [comments, setComments] = useState<
    {
      comment: string;
      avatar_url: string;
      comment_id: UUID;
      updated_at: string;
      commenter_id: UUID;
      commenter_name: string;
    }[]
  >([
    {
      comment: "",
      avatar_url: "",
      comment_id: "0-0-0-0-0-0",
      updated_at: "",
      commenter_id: "0-0-0-0-0-0",
      commenter_name: "",
    },
  ]);

  useEffect(() => {
    (async function name() {
      const result = await api.post.getPostById(postID);
      if (result) {
        const data = result[0];
        console.log("p: ", data);

        setPost(data);
        setComments(data.comments);
      }
    })();
  }, []);

  return (
    <div>
      <BreadCrumb menu="home" />

      {post ? (
        <>
          {/* Post */}
          <section className="pt-5 w-full h-auto flex flex-col gap-4">
            {/* 작성자 정보 */}
            <PostAuthor avatar_url={post.avatar_url} user_name={post.user_name} updated_at={post.updated_at} />

            {/* 게시글 */}
            {post && post.post_type === "normal" ? (
              <NormalTypePost title={post.title} content={post.content} comments={comments} />
            ) : (
              <SurveyTypePost image={post.post_image} title={post.title} content={post.content} comments={comments} />
            )}

            {/* 댓글 작성 */}
            <WriteComment post_id={postID} />

            {/* 게시글에 달린 댓글들 */}
            {comments?.map((comment) => (
              <PostComment key={comment.comment_id} comment={comment} />
            ))}
          </section>
        </>
      ) : (
        <div>fetching...</div>
      )}
    </div>
  );
};

export default PostPage;
