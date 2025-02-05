import { useQuery } from "@tanstack/react-query";
import { api } from "@/supabase/utils";

const useGetSurveyForm = () => {
  const { data: surveyFormData } = useQuery({
    queryKey: ["surveyFormData"],
    queryFn: async () => {
      const surveyFormData = await api.survey.getMySurveyForm();

      return surveyFormData;
    },
    enabled: true,
    staleTime: 10 * 1000,
  });

  return { surveyFormData };
};

export default useGetSurveyForm;
