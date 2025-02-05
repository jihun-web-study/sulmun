import BreadCrumb from "@/components/common/BreadCrumb";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Input from "@/components/auth/common/Input";
import useTemplateLogics from "@/components/survey/useTemplateLogics";
import TemplateTypeBox from "@/components/survey/TemplateTypeBox";
import { ListItem } from "@/components/survey/useTemplateLogics";
import { api } from "@/supabase/utils";

const SurveyTemplatePage = () => {
  const id = Number(useLocation().pathname.split("template/").at(-1));
  const [mode, setMode] = useState<"create" | "alter" | null>(null);
  const [surveyTitle, setSurveyTitle] = useState("");

  const {
    questions,
    setQuestions,
    addItem,
    updateItemTitle,
    deleteItem,
    toggleMode,
    addOption,
    updateOption,
    deleteOption,
  } = useTemplateLogics();

  useEffect(() => {
    if (typeof id === "number" && id > 0) setMode("alter");
    else setMode("create");
  }, [id]);

  useEffect(() => {
    // DB에서 가져왔다고 가정
    const dummyFetchData: ListItem[] = [
      { id: 1, title: "1", type: "choice", options: [{ option_number: 1, option: "1" }] },
      { id: 2, title: "2", type: "essay", options: [{ option_number: 1, option: "1" }] },
      { id: 3, title: "3", type: "choice", options: [{ option_number: 1, option: "1" }] },
      { id: 4, title: "4", type: "essay", options: [{ option_number: 1, option: "1" }] },
    ];

    if (mode === "alter") setQuestions(dummyFetchData);
  }, [mode, setQuestions]);

  return (
    <div className="w-full h-auto">
      <BreadCrumb menu="survey" />

      <div className="w-full h-full mt-5 flex flex-col items-start gap-4">
        <strong>설문지 템플릿 추가</strong>
        <Input
          type="text"
          value={surveyTitle}
          placeholder="설문지 템플릿의 제목을 입력해주세요."
          onChange={setSurveyTitle}
        />

        {/* test */}
        <button
          onClick={() => console.table(Boolean(questions.length !== 0), questions)}
          className="mb-4 w-full font-bold"
        >
          items 확인
        </button>
        {/* test */}

        {/* 함수들은 그냥 자식 컴포넌트 안에 선언으로 변경..? */}
        {questions.map((item) => (
          <TemplateTypeBox
            key={item.id}
            item={item}
            updateItemTitle={updateItemTitle}
            deleteItem={deleteItem}
            toggleMode={toggleMode}
            addOption={addOption}
            updateOption={updateOption}
            deleteOption={deleteOption}
          />
        ))}

        <button onClick={addItem} className="px-10 py-2 rounded-lg bg-proj-sub-color text-white">
          질문 추가
        </button>

        <div className="w-full mt-10 flex justify-end gap-3 text-white">
          <button className="px-10 py-2 bg-[#D8D8D8] font-bold rounded-md">뒤로가기</button>
          <button
            className="px-10 py-2 bg-proj-sub-color font-bold rounded-md"
            onClick={async () => {
              if (questions.length === 0 || surveyTitle === "") {
                alert("설문지 템플릿 제출 불가!");
              } else {
                const result = await api.survey.createSurveyWithQuestions({
                  surveyName: surveyTitle,
                  questions: questions,
                });
              }
            }}
          >
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyTemplatePage;
