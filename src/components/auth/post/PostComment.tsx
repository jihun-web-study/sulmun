type PostCommentProps = {
  user_id: number;
  user_name: string;
  avatar_url: string | undefined;
  updated_at: string;
  comment: string;
};

const PostComment = ({ comment }: { comment: PostCommentProps }) => {
  const backgroundImageStyle = comment.avatar_url ? { backgroundImage: `url('${comment.avatar_url}')` } : undefined;

  return (
    <div className="w-full h-auto flex gap-2">
      {/* 댓글 작성자 프로필 사진 */}
      <button className="w-9 h-9 rounded-lg bg-[#D9D9D9]" style={backgroundImageStyle} />

      <div className="w-full flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <div className="font-semibold text-sm">{comment.user_name}</div>
          <div className="font-medium text-xs">{comment.updated_at}</div>
        </div>
        <div className="bg-white w-full p-3 rounded-md">{comment.comment}</div>
      </div>
    </div>
  );
};

export default PostComment;
