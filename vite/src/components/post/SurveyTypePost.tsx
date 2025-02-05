import { UUID } from "crypto";
import { Link } from "react-router-dom";

type SurveyTypePostProps = {
  title: string;
  content: string;
  image: string | undefined;
  comments: {
    comment: string;
    avatar_url: string;
    comment_id: UUID;
    updated_at: string;
    commenter_id: UUID;
    commenter_name: string;
  }[];
  alreadyResponsed: boolean;
  surveyId: number | null;
};

const SurveyTypePost = ({ title, content, image, comments, alreadyResponsed, surveyId }: SurveyTypePostProps) => {
  const backgroundImageStyle = image ? { backgroundImage: `url('${image}')` } : undefined;

  return (
    <div className="w-full flex flex-col gap-4">
      {image && <div className="w-full h-72 bg-center bg-no-repeat bg-cover" style={backgroundImageStyle} />}

      <div className="bg-white w-full h-auto px-6 py-5 flex flex-col rounded-md border border-gray-300">
        <div className="font-semibold text-lg mb-1">{title}</div>
        <div className="font-semibold text-sm">{content}</div>
        <Link
          to={`/survey/${surveyId}`}
          className={`w-32 h-8 my-4 flex justify-center items-center rounded-md text-white text-sm hover:text-white ${
            alreadyResponsed ? "bg-[#D0D0D0]" : "bg-proj-bg-linear"
          }`}
        >
          설문지 작성하기
        </Link>
        <div className="flex items-center gap-1 font-semibold text-xs text-[#999999]">
          댓글 <strong>{comments.length}</strong>
        </div>
      </div>
    </div>
  );
};

export default SurveyTypePost;
