import { addComment } from "@/supabase/utils";
import { UUID } from "crypto";
import { useState } from "react";

type WriteCommentProps = {
  post_id: UUID;
};

const WriteComment = ({ post_id }: { post_id: WriteCommentProps }) => {
  const [myComment, setMyComment] = useState("");

  return (
    <div className="w-full h-20 flex gap-3">
      <textarea
        name="comment-input"
        id="comment-input"
        placeholder="댓글을 작성해주세요"
        value={myComment}
        onChange={(e) => setMyComment(e.target.value)}
        className="resize-none w-full h-full px-6 py-4 rounded-md text-md leading-4"
      />
      <button
        onClick={async () => {
          if (myComment !== "") {
            const result = await addComment({ postId: post_id, comment: myComment });
            console.log(result);
            location.reload();
          }
        }}
        className="w-36 text-sm text-white rounded-md bg-proj-sub-color"
      >
        작성하기
      </button>
    </div>
  );
};
export default WriteComment;
