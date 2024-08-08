import { UUID } from "crypto";
import { useEffect, useState } from "react";

type PostCommentProps = {
  comment: string;
  avatar_url: string;
  comment_id: UUID;
  updated_at: string;
  commenter_id: UUID;
  commenter_name: string;
};

const PostComment = ({ comment }: { comment: PostCommentProps }) => {
  const [ago, setAgo] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const updateDate = new Date(comment.updated_at);
    // 두 날짜 간의 차이를 밀리초 단위로 계산
    const differenceInMilliseconds = currentDate.getTime() - updateDate.getTime();

    // 차이를 밀리초에서 분 단위로 변환 (원하는 경우)
    const differenceInDays = differenceInMilliseconds / (1000 * 60);

    if (differenceInDays < 1) setAgo("방금전");
    else if (differenceInDays < 60) setAgo(`${Math.trunc(differenceInDays)}분전`);
    else setAgo(`${Math.trunc(differenceInDays / 60)}시간전`);
  }, [comment.updated_at]);

  const backgroundImageStyle = comment.avatar_url ? { backgroundImage: `url('${comment.avatar_url}')` } : undefined;

  return (
    <div className="w-full h-auto flex gap-2">
      {/* 댓글 작성자 프로필 사진 */}
      <button className="w-9 h-9 rounded-lg bg-[#D9D9D9]" style={backgroundImageStyle} />

      <div className="w-full flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <div className="font-semibold text-sm">{comment.commenter_name}</div>
          <div className="font-medium text-xs">{ago}</div>
        </div>
        <div className="bg-white w-full p-3 rounded-md">{comment.comment}</div>
      </div>
    </div>
  );
};

export default PostComment;
