const SurveyMainPage = () => {
  const sampleSureveyResponse = [
    { survey_id: 1, title: "포스트제목1", surveyName: "설문지1", question_count: 10, reponse_count: 30 },
    { survey_id: 2, title: "포스트제목2", surveyName: "설문지2", question_count: 10, reponse_count: 30 },
    { survey_id: 1, title: "포스트제목1", surveyName: "설문지1", question_count: 10, reponse_count: 30 },
    { survey_id: 2, title: "포스트제목2", surveyName: "설문지2", question_count: 10, reponse_count: 30 },
    { survey_id: 1, title: "포스트제목1", surveyName: "설문지1", question_count: 10, reponse_count: 30 },
    { survey_id: 2, title: "포스트제목2", surveyName: "설문지2", question_count: 10, reponse_count: 30 },
    { survey_id: 2, title: "포스트제목2", surveyName: "설문지2", question_count: 10, reponse_count: 30 },
  ];

  const sampleSureveyTemplate = [
    { survey_id: 1, surveyName: "설문지1", question_count: 10 },
    { survey_id: 2, surveyName: "설문지2", question_count: 10 },
  ];

  return (
    <div className="flex flex-col gap-6 ">
      <div>
        <div className="mb-5 font-bold text-base text-gray-500">설문지</div>

        <div className="flex gap-5 overflow-hidden overflow-x-scroll scrollbar-hide">
          {sampleSureveyResponse?.map((data) => (
            <button
              key={data.survey_id}
              className="w-52 h-auto flex flex-col flex-shrink-0 justify-between px-5 py-4 rounded-lg bg-white"
            >
              <div className="font-bold text-base pb-3">{data.title}</div>
              <div className="font-bold text-sm pb-2">{data.surveyName}</div>
              <div className="text-xs pb-5">질문 {data.question_count}개</div>
              <div className="text-xs">응답 {data.reponse_count}개</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-5 font-bold text-base text-gray-500">설문지 탬플릿</div>

        <div className="flex gap-5 overflow-hidden overflow-x-scroll scrollbar-hide">
          <button className="w-52 h-auto flex flex-col justify-between px-5 py-4 rounded-lg bg-white">
            <div className="font-bold text-sm pb-2">템플릿 추가하기</div>
          </button>
          {sampleSureveyTemplate?.map((data) => (
            <button
              key={data.survey_id}
              className="w-52 h-auto flex flex-col justify-between px-5 py-4 rounded-lg bg-white"
            >
              <div className="font-bold text-sm pb-2">{data.surveyName}</div>
              <div className="text-xs">질문 {data.question_count}개</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurveyMainPage;
