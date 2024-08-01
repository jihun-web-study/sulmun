type SurveyPostProps = {
  title: string;
  description: string;
  image: string | undefined;
};

const SurveyPost = ({ title = "", description = "", image }: SurveyPostProps) => {
  const backgroundImageStyle = image ? { backgroundImage: `url('${image}')` } : undefined;

  return (
    <button
      className={`relative w-full h-72 flex items-end p-4 bg-center bg-no-repeat bg-[cover] rounded-lg`}
      style={backgroundImageStyle}
    >
      {/* 투명도 적용용 요소 */}
      <div className="absolute w-full h-full inset-0 bg-black bg-opacity-10 rounded-lg" />
      <div className="flex flex-col items-start gap-1 z-10 text-white">
        <div className="text-4xl">{title}</div>
        <div className="text-base">{description}</div>
      </div>
    </button>
  );
};

export default SurveyPost;
