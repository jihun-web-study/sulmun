import { getMyQuestionForm } from "@/supabase/utils";
import { useEffect, useState } from "react";

type QuestionForm = { id: number; survey_name: string } | null;

const MainTemplateButton = ({ surveyForm }: { surveyForm: QuestionForm }) => {
  const [myQuestionForm, setMyQuestionForm] = useState<QuestionForm>(null);

  useEffect(() => {
    if (surveyForm) {
      (async function getQuestionForm() {
        const questionForm = await getMyQuestionForm(surveyForm.id);
        console.log(surveyForm.id, questionForm);
        setMyQuestionForm(questionForm);
      })();
    }
  }, [surveyForm]);

  return (
    <button className="w-52 h-auto flex flex-col justify-between px-5 py-4 rounded-lg bg-white">
      <div className="font-bold text-sm pb-2">{surveyForm?.survey_name}</div>
      <div className="text-xs">질문 {myQuestionForm?.length}개</div>
    </button>
  );
};

export default MainTemplateButton;
