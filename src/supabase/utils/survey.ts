import supabase from "@/supabase/initial";
import { getUserId } from "@/supabase/utils/auth";

export async function getMySurveyForm() {
  try {
    const userId = await getUserId();

    const { data: surveyData, error: surveyError } = await supabase
      .from("survey_form")
      .select("*")
      .eq("user_id", userId);

    if (surveyError) throw surveyError;

    return surveyData;
  } catch (error) {
    console.log(error);
  }
}

export async function getMyQuestionForm(surveyId: number) {
  try {
    const { data: questionData, error: questionError } = await supabase
      .from("question_form")
      .select("*")
      .eq("survey_id", Number(surveyId));

    if (questionError) throw questionError;

    return questionData;
  } catch (error) {
    console.log(error);
  }
}

export async function createSurveyWithQuestions({ surveyName, questions }: { surveyName: string; questions: {}[] }) {
  try {
    const { data, error } = await supabase.rpc("create_survey_with_questions", {
      p_survey_name: surveyName,
      p_questions: questions,
    });

    if (error) throw error;

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
