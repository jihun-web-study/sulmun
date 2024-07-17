import { Routes, Route } from "react-router-dom";
import { memo } from "react";
import HomePage from "@/pages/HomePage";
import Sample from "@/pages/Sample";
import Error from "@/pages/Error";

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/sample" element={<Sample />} />
    </Routes>
  );
};

export default memo(Router);
