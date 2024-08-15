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
