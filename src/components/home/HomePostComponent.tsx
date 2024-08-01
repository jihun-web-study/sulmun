import SurveyPost from "@/components/home/postComponents/SurveyPost";
import NormalPost from "@/components/home/postComponents/NormalPost";
import PostAuthor from "@/components/auth/common/PostAuthor";

export type PostDataTypes = {
  post_id: number;
  type: "normal" | "survey";
  title: string;
  image: string | undefined;
  description: string;
  user_name: string;
  avatar_url: string | undefined;
  created_at: string;
};

const HomePostComponent = ({ postData }: { postData: PostDataTypes }) => {
  //console.log(postData);

  return (
    <div className=" w-full h-auto flex flex-col gap-4">
      {/* 게시글 작성자 정보 */}
      <PostAuthor avatar_url={postData.avatar_url} user_name={postData.user_name} created_at={postData.created_at} />

      {/* 게시글 내용물 */}
      {postData.type === "normal" ? (
        <NormalPost />
      ) : (
        <SurveyPost title={postData.title} description={postData.description} image={postData.image} />
      )}
    </div>
  );
};

export default HomePostComponent;
