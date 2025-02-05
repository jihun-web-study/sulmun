import { UUID } from "crypto";
import { useNavigate } from "react-router-dom";

type NormalPostProps = {
  postID: UUID;
  title: string;
  description: string;
  commentCount: string;
};

const NormalPost = ({ postID, title = "", description = "", commentCount }: NormalPostProps) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`/post/${postID}`)} className="flex flex-col gap-1 px-5 py-4 bg-white rounded-lg">
      <span className="text-lg leading-4 font-medium">{title}</span>
      <span className="w-1/2 text-start text-sm leading-4 font-normal line-clamp-1">{description}</span>
      <span className="text-[#999999] text-xs leading-4 font-medium">
        댓글 <strong>{commentCount}</strong>
      </span>
    </button>
  );
};

export default NormalPost;
