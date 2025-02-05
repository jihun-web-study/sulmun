import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/supabase/utils";



const useGetPostByFilter = ({ filterType, pageNumber, pageSize }: { filterType: ; pageNumber: ; pageSize:  }) => {
  const queryClient = useQueryClient();

  

  // 필터별로 쿼리 분리하기
  const { data: allPosts } = useQuery({
    queryKey: ["allPosts", filterType, pageNumber, pageSize],
    queryFn: async () => {
      const posts = await api.post.getFilteredPostsByRange({ filterType, pageNumber, pageSize });

      return posts;
    },
    enabled: true,
    staleTime: 10 * 1000,
  });

  /*   const { mutateAsync: addData } = useMutation({
    mutationFn: async ({ title, body }) => {
      const { data, error } = await supabase.from("studywithoutrls").insert([{ title, body }]).select();

      if (error) {
        throw new Error("error", error);
      }

      return data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries("record");
    },
  }); */

  return { allPosts };
};

export default useGetPostByFilter;
