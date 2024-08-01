import { Link } from "react-router-dom";

type SurveyTypePostProps = {
  title: string;
  description: string;
  image: string | undefined;
  comment_count: number;
};

const SurveyTypePost = ({ title, description, image, comment_count }: SurveyTypePostProps) => {
  const backgroundImageStyle = image ? { backgroundImage: `url('${image}')` } : undefined;

  return (
    <div className="w-full flex flex-col gap-4">
      {image && <div className="w-full h-80 bg-center bg-no-repeat bg-cover" style={backgroundImageStyle} />}

      <div className="bg-white w-full h-auto px-6 py-5 flex flex-col rounded-md border border-gray-300">
        <div className="font-semibold text-lg mb-1">{title}</div>
        <div className="font-semibold text-sm">{description}</div>
        <Link
          to="/"
          className="w-32 h-8 my-4 flex justify-center items-center rounded-md text-white bg-proj-bg-linear text-sm"
        >
          설문지 작성하기
        </Link>
        <div className="flex items-center gap-1 font-semibold text-xs text-[#999999]">
          댓글 <strong>{comment_count}</strong>
        </div>
      </div>
    </div>
  );
};

export default SurveyTypePost;
