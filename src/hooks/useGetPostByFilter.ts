import { useQuery } from "@tanstack/react-query";
import { getFilteredPostsByRange } from "@/supabase/utils";

const useGetPostByFilter = ({
  filterType,
  pageNumber,
  pageSize,
}: {
  filterType: "all" | "normal" | "survey";
  pageNumber: number;
  pageSize: number;
}) => {
  // 필터별로 쿼리 분리하기
  const { data: allPosts } = useQuery({
    queryKey: ["allPosts", filterType, pageNumber, pageSize],
    queryFn: async () => {
      const posts = await getFilteredPostsByRange({ filterType, pageNumber, pageSize });

      return posts;
    },
    enabled: true,
    staleTime: 10 * 1000,
  });

  return { allPosts };
};

export default useGetPostByFilter;
