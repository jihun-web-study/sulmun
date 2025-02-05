import { useQuery } from "@tanstack/react-query";
import { api } from "@/supabase/utils";
import { useState } from "react";

const useHomePageLogics = () => {
  const [currentType, setCurrentType] = useState<"all" | "normal" | "survey">("all");
  const [currentTotalCount, setCurrentTotalCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 5;

  // 필터별로 쿼리 분리하기
  const { data: allPosts } = useQuery({
    queryKey: ["allPosts", pageNumber],
    queryFn: async () => {
      const { data: posts, total_count } = await api.post.getFilteredPostsByRange({
        filterType: "all",
        pageNumber,
        pageSize,
      });

      setCurrentTotalCount(total_count);

      return posts;
    },
    enabled: currentType === "all",
    staleTime: 60 * 1000,
  });

  const { data: normalPosts } = useQuery({
    queryKey: ["normalPosts", pageNumber],
    queryFn: async () => {
      const { data: posts, total_count } = await api.post.getFilteredPostsByRange({
        filterType: "normal",
        pageNumber,
        pageSize,
      });

      setCurrentTotalCount(total_count);

      return posts;
    },
    enabled: currentType === "normal",
    staleTime: 60 * 1000,
  });

  const { data: surveyPosts } = useQuery({
    queryKey: ["surveyPosts", pageNumber],
    queryFn: async () => {
      const { data: posts, total_count } = await api.post.getFilteredPostsByRange({
        filterType: "survey",
        pageNumber,
        pageSize,
      });

      setCurrentTotalCount(total_count);

      return posts;
    },
    enabled: currentType === "survey",
    staleTime: 60 * 1000,
  });

  return {
    currentType,
    setCurrentType,
    pageSize,
    pageNumber,
    setPageNumber,
    currentTotalCount,
    allPosts,
    normalPosts,
    surveyPosts,
  };
};

export default useHomePageLogics;
