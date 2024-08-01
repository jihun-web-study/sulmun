import BreadCrumb from "@/components/common/BreadCrumb";
import { useLocation } from "react-router-dom";
import { samplePost } from "@/store/sample";
import PostAuthor from "@/components/auth/common/PostAuthor";
import { useState } from "react";

import WriteComment from "@/components/auth/post/WriteComment";
import NormalTypePost from "@/components/auth/post/NormalTypePost";
import SurveyTypePost from "@/components/auth/post/SurveyTypePost";
import PostComment from "@/components/auth/post/PostComment";

const PostPage = () => {
  const postID = useLocation().pathname.split("/post/").at(-1);
  const post = samplePost.filter((v) => v.post_id === Number(postID))[0];
  const [myComment, setMyComment] = useState("");

  console.log(postID, post);

  const comments = [
    { user_id: 1, user_name: "John", avatar_url: undefined, updated_at: "3 min", comment: "댓글" },
    { user_id: 2, user_name: "John", avatar_url: undefined, updated_at: "3 min", comment: "댓글" },
    { user_id: 3, user_name: "John", avatar_url: undefined, updated_at: "3 min", comment: "댓글" },
    { user_id: 4, user_name: "John", avatar_url: undefined, updated_at: "3 min", comment: "댓글" },
  ];

  return (
    <div>
      <BreadCrumb menu="home" />

      {/* Post */}
      <section className="pt-5 w-full h-auto flex flex-col gap-4">
        {/* 작성자 정보 */}
        <PostAuthor avatar_url={post.avatar_url} user_name={post.user_name} created_at={post.created_at} />

        {/* 게시글 */}
        {post.type === "normal" ? (
          <NormalTypePost title={post.title} description={post.description} comment_count={comments.length} />
        ) : (
          <SurveyTypePost
            image={post.image}
            title={post.title}
            description={post.description}
            comment_count={comments.length}
          />
        )}

        {/* 댓글 작성 */}
        <WriteComment value={myComment} onChange={setMyComment} />

        {/* 게시글에 달린 댓글들 */}
        {comments.map((comment) => (
          <PostComment key={comment.user_id} comment={comment} />
        ))}
      </section>
    </div>
  );
};

export default PostPage;
