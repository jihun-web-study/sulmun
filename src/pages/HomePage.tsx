import HomePostingButton from "@/components/home/HomePostingButton";
import HomePostComponent from "@/components/home/HomePostComponent";
import useHomePageLogics from "@/hooks/useHomePageLogics";
import Pagination from "@/components/home/Pagination";

const HomePage = () => {
  const {
    currentType,
    setCurrentType,
    pageSize,
    pageNumber,
    setPageNumber,
    currentTotalCount,
    allPosts,
    normalPosts,
    surveyPosts,
  } = useHomePageLogics();

  const onClickType = (type: "all" | "normal" | "survey") => () => {
    setCurrentType(type);
    setPageNumber(1);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-1">
        <HomePostingButton />
        <button
          onClick={onClickType("all")}
          className={`type ml-4 w-16 h-[44px] rounded-md border ${
            currentType === "all" ? "bg-proj-sub-color text-white" : "bg-white border-gray-300"
          }`}
        >
          전부
        </button>
        <button
          onClick={onClickType("normal")}
          className={`type ml-2 w-16 h-[44px] rounded-md border ${
            currentType === "normal" ? "bg-proj-sub-color text-white" : "bg-white border-gray-300"
          }`}
        >
          일반
        </button>
        <button
          onClick={onClickType("survey")}
          className={`type ml-2 w-16 h-[44px] rounded-md border ${
            currentType === "survey" ? "bg-proj-sub-color text-white" : "bg-white border-gray-300"
          }`}
        >
          설문
        </button>
      </div>

      {currentType === "all" && allPosts?.map((data) => <HomePostComponent key={data.id} postData={data} />)}
      {currentType === "normal" && normalPosts?.map((data) => <HomePostComponent key={data.id} postData={data} />)}
      {currentType === "survey" && surveyPosts?.map((data) => <HomePostComponent key={data.id} postData={data} />)}

      <Pagination
        currentPage={pageNumber}
        totalPages={Math.ceil(currentTotalCount / pageSize)}
        onPageChange={setPageNumber}
      />
    </div>
  );
};

export default HomePage;
