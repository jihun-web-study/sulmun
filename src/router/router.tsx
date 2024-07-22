import { Routes, Route } from "react-router-dom";
import { memo } from "react";
import HomePage from "@/pages/HomePage";
import JotaiSample from "@/pages/JotaiSample";
import Error from "@/pages/Error";

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/sample" element={<JotaiSample />} />
    </Routes>
  );
};

export default memo(Router);
