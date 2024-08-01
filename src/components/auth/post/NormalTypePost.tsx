type NormalTypePostProps = { title: string; description: string; comment_count: number };

const NormalTypePost = ({ title, description, comment_count }: NormalTypePostProps) => {
  return (
    <div className="bg-white w-full h-auto px-6 py-5 flex flex-col rounded-md border border-gray-300">
      <div className="font-semibold text-lg mb-1">{title}</div>
      <div className="font-semibold text-sm mb-2">{description}</div>
      <div className="flex items-center gap-1 font-semibold text-xs text-[#999999]">
        댓글 <strong>{comment_count}</strong>
      </div>
    </div>
  );
};

export default NormalTypePost;
