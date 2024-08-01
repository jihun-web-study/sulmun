import SurveyPost from "@/components/home/postComponents/SurveyPost";
import NormalPost from "@/components/home/postComponents/NormalPost";

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

  const backgroundImageStyle = postData.avatar_url ? { backgroundImage: `url('${postData.avatar_url}')` } : undefined;

  return (
    <div className=" w-full h-auto flex flex-col gap-4">
      {/* 게시글 작성자 정보 */}
      <div className="w-full h-9 flex items-center gap-2">
        <button
          onClick={() => console.log("clicked")}
          className={"h-full aspect-square bg-[#D9D9D9] rounded-lg bg-center bg-no-repeat bg-cover border"}
          style={backgroundImageStyle}
        ></button>
        <strong className="text-sm">{postData.user_name}</strong>
        <span className="text-xs">{`${postData.created_at} minutes ago`}</span>
      </div>
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
