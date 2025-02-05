import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "@/supabase/utils";
import ChoiceBox from "@/components/survey/userSurvey/ChoiceBox";
import EssayBox from "@/components/survey/userSurvey/EssayBox";

export interface IQuestion {
  id: number;
  question_type: "choice" | "essay";
  question_title: string;
  question_options: { number: number; option: number | string }[];
}

interface ISurvey {
  survey_title: string;
  questions: IQuestion[];
}

type SurveyResTypes = ISurvey | undefined;

const UserSurvey = () => {
  const surveyId = useParams().id;

  const [surveyTitle, setSurveyTitle] = useState("");
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  console.log(surveyId);

  useEffect(() => {
    (async function getSurvey() {
      const data = (await api.survey.getSurveyById(Number(surveyId))) as SurveyResTypes;

      console.log(1, data);
      if (data) {
        setSurveyTitle(data.survey_title);
        setQuestions(data.questions);
      }
    })();
  }, [surveyId]);

  return (
    <div className="flex flex-col gap-6">
      <h2>UserSurvey</h2>
      <strong>{surveyTitle}</strong>
      <button onClick={() => console.log(questions)}>문제 확인</button>

      <ul className="flex flex-col gap-6">
        {questions.map((question: IQuestion, idx) => (
          <li key={question.id} className="flex flex-col">
            <strong>
              {`${idx + 1})`} {question.question_title}
            </strong>
            {question.question_type === "essay" && <EssayBox />}
            {question.question_type === "choice" && question.question_options?.length !== 0 && (
              <ChoiceBox question={question} />
            )}
          </li>
        ))}
      </ul>

      <div className="inline-flex justify-end gap-4">
        <button className="px-10 py-2 bg-[#D8D8D8] font-bold rounded-md">뒤로가기</button>
        <button className="px-10 py-2 bg-proj-sub-color font-bold rounded-md">제출하기</button>
      </div>
    </div>
  );
};

export default UserSurvey;
