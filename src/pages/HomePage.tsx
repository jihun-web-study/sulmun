import { useState } from "react";
import HomePostingButton from "@/components/home/HomePostingButton";
import HomePostComponent from "@/components/home/HomePostComponent";
import useGetPostByFilter from "@/hooks/useGetPostByFilter";
import { PostDataTypes } from "@/components/home/HomePostComponent";

const HomePage = () => {
  const [typeFilter, setTypeFilter] = useState<"all" | "normal" | "survey">("all");
  // 페이지네이션도 추가해야함
  const { allPosts } = useGetPostByFilter({ filterType: typeFilter, pageNumber: 1, pageSize: 10 });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-1">
        <HomePostingButton />
        <button
          onClick={() => setTypeFilter("all")}
          className={`type ml-4 w-16 h-[44px] rounded-md border ${
            typeFilter === "all" ? "bg-proj-sub-color text-white" : "bg-white border-gray-300"
          }`}
        >
          전부
        </button>
        <button
          onClick={() => setTypeFilter("normal")}
          className={`type ml-2 w-16 h-[44px] rounded-md border ${
            typeFilter === "normal" ? "bg-proj-sub-color text-white" : "bg-white border-gray-300"
          }`}
        >
          일반
        </button>
        <button
          onClick={() => setTypeFilter("survey")}
          className={`type ml-2 w-16 h-[44px] rounded-md border ${
            typeFilter === "survey" ? "bg-proj-sub-color text-white" : "bg-white border-gray-300"
          }`}
        >
          설문
        </button>
      </div>

      {allPosts?.map((data) => (
        <HomePostComponent key={data.id} postData={data} />
      ))}
    </div>
  );
};

export default HomePage;
