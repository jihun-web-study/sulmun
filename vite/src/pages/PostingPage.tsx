import BreadCrumb from "@/components/common/BreadCrumb";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@/supabase/utils";
import useGetSurveyForm from "@/store/useGetSurveyForm";

const PostingPage = () => {
  const navigate = useNavigate();
  const [currentType, setCurrentType] = useState<"normal" | "survey">("normal");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [surveyForm, setSurveyForm] = useState<{
    created_at: string | null;
    id: number;
    survey_name: string;
    updated_at: string | null;
    user_id: string | null;
  } | null>(null);
  const [isSurveySelectOpen, setIsSurveySelectOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // 업로드한 이미지 미리보기
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { surveyFormData } = useGetSurveyForm();

  const handleButtonClick = () => {
    // file input 요소를 클릭하여 파일 선택 다이얼로그 열기
    fileInputRef?.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadFiles = event.target.files;
    if (uploadFiles) {
      const file = uploadFiles[0];

      if (file.type.substring(0, 5) === "image") {
        setSelectedFile(file);
        // 업로드한 이미지 렌더링
        if (previewUrl) {
          URL.revokeObjectURL(previewUrl);
          setPreviewUrl(null); //
        }

        const newPreviewUrl = URL.createObjectURL(file);
        setPreviewUrl(newPreviewUrl);
      } else {
        alert("이미지 파일만 업로드하세요!!!");
      }
    }
  };

  useEffect(() => {
    // 컴포넌트가 언마운트될 때 URL 객체를 해제합니다.
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  function generateRandomFileName() {
    let result = "";
    const length = 8;
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
  }

  const onClickPosting = async () => {
    if (currentType === "survey") {
      if (!selectedFile || !surveyForm) {
        alert("이미지또는 설문지를 추가해주세요.");
      } else {
        console.log(selectedFile.name);

        const randomFileName = generateRandomFileName();

        const { publicUrl } = await api.post.uploadImage({
          fileName: `${randomFileName}`,
          imageFile: selectedFile,
        });

        const result = await api.post.postingWithSurvey({
          postType: "survey",
          title,
          content,
          postImage: publicUrl,
          surveyId: surveyForm.id, // TODO: 여기 해야함
        });

        if (!result) return new Error("포스팅 실패!");
      }
    } else {
      const result = await api.post.postingNormal({ postType: "normal", title, content, postImage: null });
      if (!result) return new Error("포스팅 실패!");
    }

    navigate("/");
  };

  const SurveyExtraForms = () => {
    return (
      <article className="w-full flex flex-col md:flex-row gap-[10%]">
        <div className="flex flex-col gap-3">
          <strong onClick={() => console.log(2, previewUrl, typeof previewUrl)}>대표이미지 업로드</strong>
          <button
            onClick={handleButtonClick}
            className="w-52 h-28 flex justify-center items-center rounded-md border border-[#EEEEEE]"
          >
            {previewUrl && typeof previewUrl === "string" ? (
              <img src={previewUrl} alt="project image" className="h-full" />
            ) : (
              <div className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17M7 9L12 4M12 4L17 9M12 4V16"
                    stroke="#333333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <strong className="mt-[2px]">파일 업로드</strong>
              </div>
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
              {surveyForm?.survey_name || "설문지를 선택해주세요."}
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
              {surveyFormData?.map((surveyForm) => (
                <React.Fragment key={surveyForm.id}>
                  <li
                    className="optionItem p-2 hover:cursor-pointer hover:bg-proj-color"
                    role="presentation"
                    onClick={() => {
                      setSurveyForm(surveyForm);
                      setIsSurveySelectOpen(false);
                    }}
                  >
                    {surveyForm.survey_name}
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
              className={`w-32 h-8 border rounded-md hover:border-proj-color ${
                currentType === "normal" && "border-proj-color"
              }`}
            >
              일반
            </button>
            <button
              onClick={() => {
                if (currentType === "normal") setCurrentType("survey");
              }}
              className={`w-32 h-8 ml-3 border rounded-md hover:border-proj-color ${
                currentType === "survey" && "border-proj-color"
              }`}
            >
              설문
            </button>
          </div>
        </article>

        <article className="w-full h-auto bt-2 mb-4 flex flex-col">
          <strong className="font-bold text-sm">제목</strong>
          <input
            value={title}
            placeholder="제목"
            onChange={(e) => setTitle(e.target.value)}
            className="w-[60%] h-auto mt-2 px-5 py-2 rounded-md border border-[#EEEEEE]"
          />
        </article>

        <article className="w-full h-auto bt-2 mb-4 flex flex-col">
          <strong className="font-bold text-sm">내용</strong>
          <textarea
            value={content}
            placeholder="제목"
            onChange={(e) => setContent(e.target.value)}
            className="w-[60%] h-64 mt-2 px-5 py-4 resize-none rounded-md border border-[#EEEEEE]"
          />
        </article>

        {/* 설문 타입일 때만 렌더링 */}
        {currentType === "survey" && <SurveyExtraForms />}

        <div className="pt-10 flex justify-end items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="w-32 h-8 border rounded-md text-white text-xs font-bold bg-[#DBDBDB]"
          >
            뒤로가기
          </button>
          <button
            onClick={onClickPosting}
            className="w-32 h-8 border rounded-md text-white text-xs font-bold bg-proj-color"
          >
            등록하기
          </button>
        </div>
      </section>
    </div>
  );
};

export default PostingPage;
