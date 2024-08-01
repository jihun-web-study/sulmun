const NormalPost = () => {
  const [title, comment] = ["title", "1"];
  const longContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus enim vel incidunt nostrum at voluptatibus cum, pariatur aliquid quibusdam facilis error eaque similique minus rem neque, magni rerum eveniet ipsum?";

  return (
    <button className="flex flex-col gap-1 px-5 py-4 bg-white rounded-lg">
      <span className="text-lg leading-4 font-medium">{title}</span>
      <span className="w-1/2 text-start text-sm leading-4 font-normal line-clamp-1">{longContent}</span>
      <span className="text-[#999999] text-xs leading-4 font-medium">
        댓글 <strong>{comment}</strong>
      </span>
    </button>
  );
};

export default NormalPost;
