import { UUID } from "crypto";

type NormalTypePostProps = {
  title: string;
  content: string;
  comments: {
    comment: string;
    avatar_url: string;
    comment_id: UUID;
    updated_at: string;
    commenter_id: UUID;
    commenter_name: string;
  }[];
};

const NormalTypePost = ({ title, content, comments }: NormalTypePostProps) => {
  return (
    <div className="bg-white w-full h-auto px-6 py-5 flex flex-col rounded-md border border-gray-300">
      <div className="font-semibold text-lg mb-1">{title}</div>
      <div className="font-semibold text-sm mb-2">{content}</div>
      <div className="flex items-center gap-1 font-semibold text-xs text-[#999999]">
        댓글 <strong>{comments.length}</strong>
      </div>
    </div>
  );
};

export default NormalTypePost;
