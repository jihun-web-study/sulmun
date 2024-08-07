import { useEffect, useState } from "react";

type PostAuthorProps = {
  avatar_url: string | undefined;
  user_name: string;
  updated_at: string;
};

const PostAuthor = ({ avatar_url = undefined, user_name = "", updated_at = "" }: PostAuthorProps) => {
  const backgroundImageStyle = avatar_url ? { backgroundImage: `url('${avatar_url}')` } : undefined;
  const [ago, setAgo] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const updateDate = new Date(updated_at);
    // 두 날짜 간의 차이를 밀리초 단위로 계산
    const differenceInMilliseconds = currentDate.getTime() - updateDate.getTime();

    // 차이를 밀리초에서 분 단위로 변환 (원하는 경우)
    const differenceInDays = differenceInMilliseconds / (1000 * 60);

    if (differenceInDays < 1) setAgo("방금전");
    else if (differenceInDays < 60) setAgo(`${Math.trunc(differenceInDays)}분전`);
    else setAgo(`${Math.trunc(differenceInDays / 60)}시간전`);
  }, []);

  return (
    <div className="w-full h-9 flex items-center gap-2">
      <button
        onClick={() => console.log("clicked")}
        className={"h-full aspect-square bg-[#D9D9D9] rounded-lg bg-center bg-no-repeat bg-cover border"}
        style={backgroundImageStyle}
      ></button>
      <strong className="text-sm">{user_name}</strong>
      <span className="text-xs">{ago}</span>
    </div>
  );
};

export default PostAuthor;
