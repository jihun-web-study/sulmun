//import { createPost } from "@/supabase/utils";
import BreadCrumb from "@/components/common/BreadCrumb";
import { useRef, useState } from "react";
import React from "react";

const PostingPage = () => {
  /*   const [title1, description1] = ["title1", "description1"];
  const [title2, description2] = ["title2", "description2"];

  const TestCreatePost = () => {
    const onClickHandeler1 = async () => {
      await createPost({ title: title1, description: description1, type: "normal" });
    };

    const onClickHandeler2 = async () => {
      await createPost({ title: title2, description: description2, type: "survey" });
    };

    return (
      <>
        <button onClick={onClickHandeler1}>test1</button>
        <button onClick={onClickHandeler2}>test2</button>
      </>
    );
  }; */

  const [currentType, setCurrentType] = useState<"normal" | "survey">("normal");
  const [isSurveySelectOpen, setIsSurveySelectOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string | ArrayBuffer | null>(null); // 선택된 이미지를 저장할 state

  const handleButtonClick = () => {
    // file input 요소를 클릭하여 파일 선택 다이얼로그 열기
    fileInputRef?.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let file = null;
    if (event.target.files) file = event.target.files[0]; // 선택된 파일 가져오기

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // 파일을 읽은 후 이미지 상태 업데이트
      };
      reader.readAsDataURL(file); // 파일을 데이터 URL로 읽기
    }
  };

  const test = [1, 2, 3, 4, 5, 6];

  const SurveyExtraForms = () => {
    return (
      <article className="w-full flex flex-col md:flex-row gap-[10%]">
        <div className="flex flex-col gap-3">
          <strong>대표이미지 업로드</strong>
          <button
            onClick={handleButtonClick}
            className="w-52 h-28 flex justify-center items-center rounded-md border border-[#EEEEEE]"
          >
            {image && typeof image === "string" ? (
              <img src={image} alt="project image" className="h-full" />
            ) : (
              "파일 업로드"
            )}
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef} // input 요소에 ref 연결
            onChange={handleFileChange} // 파일 변경 시 호출되는 핸들러
            className="hidden" // input 요소 숨기기
          />
        </div>
        <div className="w-52 flex flex-col gap-3">
          <strong>설문지 업로드하기</strong>

          <div className="relative selectBox w-full p-2 rounded-md border border-[#EEEEEE]">
            <button
              onClick={() => setIsSurveySelectOpen((c) => !c)}
              className="w-full h-full text-sm flex justify-between items-center"
            >
              설문지를 선택해주세요.
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-200 ${isSurveySelectOpen ? "transform rotate-180" : ""}`}
              >
                <path
                  d="M6.00002 8C6.20002 8 6.40002 7.9 6.50002 7.8L9.80002 4.5C10.1 4.2 10.1 3.7 9.80002 3.4C9.50002 3.1 9.00002 3.1 8.70002 3.4L6.00002 6.1L3.30002 3.4C3.00002 3.1 2.50002 3.1 2.20002 3.4C1.90002 3.7 1.90002 4.2 2.20002 4.5L5.40002 7.7C5.60002 7.9 5.80002 8 6.00002 8Z"
                  fill="#666666"
                />
              </svg>
            </button>
            <ul
              className={`optionList max-h-24 overflow-y-scroll ${
                isSurveySelectOpen ? "flex" : "hidden"
              } flex-col absolute left-0 top-10 w-full h-auto py-2 rounded-md border `}
            >
              {test.map((v) => (
                <React.Fragment key={v}>
                  <li
                    className="optionItem p-2 hover:cursor-pointer hover:bg-proj-color"
                    role="presentation"
                    onClick={() => console.log(v)}
                  >
                    <button onClick={() => console.log(v)}>{v}</button>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="flex flex-col">
      <BreadCrumb menu="home" />
      <strong className="my-4 text-xl">포스트 쓰기</strong>
      <section className="w-full h-auto flex flex-col px-6 pt-5 pb-4 bg-white rounded-md">
        <article className="w-full h-auto mb-4">
          <strong className="font-bold text-sm">유형 선택</strong>
          <div className="mt-2">
            <button
              onClick={() => {
                if (currentType === "survey") setCurrentType("normal");
              }}
              className={`w-32 h-8 border rounded-md ${
                currentType === "normal" ? "border-proj-color" : "border-[#999999"
              }`}
            >
              일반
            </button>
            <button
              onClick={() => {
                if (currentType === "normal") setCurrentType("survey");
              }}
              className={`w-32 h-8 ml-3 border rounded-md ${
                currentType === "survey" ? "border-proj-color" : "border-[#999999"
              }`}
            >
              설문
            </button>
          </div>
        </article>

        <article className="w-full h-auto bt-2 mb-4 flex flex-col">
          <strong className="font-bold text-sm">제목</strong>
          <input className="w-[60%] h-8 mt-2 px-5 rounded-md border border-[#EEEEEE]" />
        </article>

        <article className="w-full h-auto bt-2 mb-4 flex flex-col">
          <strong className="font-bold text-sm">내용</strong>
          <textarea className="w-[60%] h-64 mt-2 px-5 resize-none rounded-md border border-[#EEEEEE]" />
        </article>

        {/* 설문 타입일 때만 렌더링 */}
        {currentType === "survey" && <SurveyExtraForms />}

        <div className="pt-10 flex justify-end items-center gap-3">
          <button className="w-32 h-8 border rounded-md text-white text-xs font-bold bg-[#DBDBDB]">뒤로가기</button>
          <button className="w-32 h-8 border rounded-md text-white text-xs font-bold bg-proj-color">등록하기</button>
        </div>
      </section>
    </div>
  );
};

export default PostingPage;
