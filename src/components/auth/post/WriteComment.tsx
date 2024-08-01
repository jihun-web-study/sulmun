import { Dispatch, SetStateAction } from "react";

type WriteCommentProps = {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};

const WriteComment = ({ value, onChange }: WriteCommentProps) => {
  return (
    <div className="w-full h-20 flex gap-3">
      <textarea
        name="comment-input"
        id="comment-input"
        placeholder="댓글을 작성해주세요"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="resize-none w-full h-full px-6 py-4 rounded-md text-md leading-4"
      />
      <button className="w-36 text-sm text-white rounded-md bg-proj-sub-color">작성하기</button>
    </div>
  );
};
export default WriteComment;
