type PostAuthorProps = {
  avatar_url: string | undefined;
  user_name: string;
  created_at: string;
};

const PostAuthor = ({ avatar_url = undefined, user_name = "", created_at = "" }: PostAuthorProps) => {
  const backgroundImageStyle = avatar_url ? { backgroundImage: `url('${avatar_url}')` } : undefined;

  return (
    <div className="w-full h-9 flex items-center gap-2">
      <button
        onClick={() => console.log("clicked")}
        className={"h-full aspect-square bg-[#D9D9D9] rounded-lg bg-center bg-no-repeat bg-cover border"}
        style={backgroundImageStyle}
      ></button>
      <strong className="text-sm">{user_name}</strong>
      <span className="text-xs">{`${created_at} minutes ago`}</span>
    </div>
  );
};

export default PostAuthor;
