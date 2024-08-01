import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OAuthPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 1초 후에 '/a'로 이동
    const timer = setTimeout(() => {
      navigate("/");
    }, 1000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearTimeout(timer);
  }, [navigate]);

  return <div className="text-2xl">잠시 후 메인페이지로 이동합니다...</div>;
};

export default OAuthPage;
