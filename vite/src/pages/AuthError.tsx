import { Link } from "react-router-dom";

const AuthError = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-300 bg-opacity-50 flex justify-center items-center">
      <div className="w-2/4 aspect-square text-white flex flex-col justify-center items-center gap-4 bg-proj-color rounded-2xl">
        <strong className="text-4xl ">로그인 후 이용해주세요</strong>
        <Link
          to={"/auth/signin"}
          className="text-3xl text-white hover:text-black underline decoration-[1px] underline-offset-[4px]"
        >
          로그인 하러가기
        </Link>
        <Link
          to={"/"}
          className="text-2xl text-white hover:text-black underline decoration-[1px] underline-offset-[4px]"
        >
          홈으로 하러가기
        </Link>
      </div>
    </div>
  );
};

export default AuthError;
