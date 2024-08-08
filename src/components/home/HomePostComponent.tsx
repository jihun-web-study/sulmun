import SurveyPost from "@/components/home/postComponents/SurveyPost";
import NormalPost from "@/components/home/postComponents/NormalPost";
import PostAuthor from "@/components/auth/common/PostAuthor";
import { UUID } from "crypto";

export type PostDataTypes = {
  id: UUID;
  comment_count: string;
  post_type: "normal" | "survey";
  title: string;
  post_image: string | undefined;
  content: string;
  user_name: string;
  avatar_url: string | undefined;
  updated_at: string;
};

const HomePostComponent = ({ postData }: { postData: PostDataTypes }) => {
  return (
    <div className=" w-full h-auto flex flex-col gap-4">
      {/* 게시글 작성자 정보 */}
      <PostAuthor
        avatar_url={postData.avatar_url ?? undefined}
        user_name={postData.user_name}
        updated_at={postData.updated_at}
      />

      {/* 게시글 내용물 */}
      {postData.post_type === "normal" ? (
        <NormalPost
          postID={postData.id}
          title={postData.title}
          description={postData.content}
          commentCount={postData.comment_count}
        />
      ) : (
        <SurveyPost
          postID={postData.id}
          title={postData.title}
          description={postData.content}
          image={postData.post_image}
        />
      )}
    </div>
  );
};

export default HomePostComponent;
