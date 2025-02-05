import MainTemplateButton from "@/components/survey/MainTemplateButton";
import useGetSurveyForm from "@/store/useGetSurveyForm";
import { Link } from "react-router-dom";

const SurveyMainPage = () => {
  const { surveyFormData } = useGetSurveyForm();

  console.log("surveyFormDatas", surveyFormData);

  const sampleSureveyResponse = [
    { survey_id: 1, title: "포스트제목1", surveyName: "설문지1", question_count: 10, reponse_count: 30 },
    { survey_id: 2, title: "포스트제목2", surveyName: "설문지2", question_count: 10, reponse_count: 30 },
    { survey_id: 3, title: "포스트제목1", surveyName: "설문지1", question_count: 10, reponse_count: 30 },
    { survey_id: 4, title: "포스트제목2", surveyName: "설문지2", question_count: 10, reponse_count: 30 },
    { survey_id: 5, title: "포스트제목1", surveyName: "설문지1", question_count: 10, reponse_count: 30 },
    { survey_id: 6, title: "포스트제목2", surveyName: "설문지2", question_count: 10, reponse_count: 30 },
    { survey_id: 7, title: "포스트제목2", surveyName: "설문지2", question_count: 10, reponse_count: 30 },
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
          <Link
            to={"/survey/template/0"}
            className="w-52 h-auto flex flex-col justify-between px-5 py-4 rounded-lg bg-white"
          >
            <span className="font-bold text-sm pb-2 whitespace-pre-wrap break-words">템플릿 추가하기</span>
          </Link>

          {surveyFormData?.map((surveyForm) => (
            <MainTemplateButton key={surveyForm.id} surveyForm={surveyForm} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurveyMainPage;
