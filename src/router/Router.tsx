import { Routes, Route } from "react-router-dom";
import { memo } from "react";
import GridLayout from "@/components/layout/gridLayout/GridLayout";
import NotFound from "@/pages/NotFound";
import AuthLayout from "@/components/auth/common/AuthLayout";
import AuthError from "@/pages/AuthError";
import SignInPage from "@/pages/SignInPage";
import SignUpInfo from "@/pages/SignUpInfo";
import SignUpVerify from "@/pages/SignUpVerify";
import OAuthPage from "@/pages/OAuthPage";
import HomePage from "@/pages/HomePage";
import PostPage from "@/pages/PostPage";
import ProtectedRoute from "@/router/ProtectedRoute";
import PostingPage from "@/pages/PostingPage";
import SurveyMainPage from "@/pages/SurveyMainPage";
import SurveyDetailPage from "@/pages/SurveyDetailPage";
import SurveyTemplatePage from "@/pages/SurveyTemplatePage";
import MyPage from "@/pages/MyPage";
import SettingPage from "@/pages/SettingPage";

import JotaiSample from "@/pages/JotaiSample";

const Router = (): JSX.Element => {
  return (
    <Routes>
      {/* 404 Not Found */}
      <Route path="*" element={<NotFound />} />
      <Route path={"/auth-error"} element={<AuthError />} />

      {/* 로그인, 회원가입 */}
      <Route path={"/auth"} element={<AuthLayout />}>
        <Route path={"signin"} element={<SignInPage />} />
        <Route
          path={"signup/*"}
          element={
            <Routes>
              <Route path={"/info"} element={<SignUpInfo />} />
              <Route path={"/verify"} element={<SignUpVerify />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          }
        />
        <Route path={"oauth"} element={<OAuthPage />} />
      </Route>

      {/* 레이아웃 적용 페이지들 */}
      <Route element={<GridLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/sample" element={<JotaiSample />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/posting" element={<PostingPage />} />
          <Route
            path="/survey/*"
            element={
              <Routes>
                <Route path="/" element={<SurveyMainPage />} />
                <Route path=":id" element={<div>id</div>} />
                <Route path="detail/:id" element={<SurveyDetailPage />} />
                <Route path="template/:id" element={<SurveyTemplatePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            }
          />

          <Route path="/mypage" element={<MyPage />} />
          <Route path="/setting" element={<SettingPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default memo(Router);
