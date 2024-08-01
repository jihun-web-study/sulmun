import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("sulmun_auth_key");

  if (!token) {
    // 토큰이 없으면 에러 페이지로 리다이렉트
    return <Navigate to="/auth-error" replace />;
  }

  // 토큰이 있으면 자식 라우트를 렌더링
  return <Outlet />;
};

export default ProtectedRoute;
