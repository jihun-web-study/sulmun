import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-300 bg-opacity-50 flex justify-center items-center">
      <div className="w-2/4 aspect-square text-white flex flex-col justify-center items-center bg-proj-color rounded-2xl">
        <div className="text-4xl ">404 Error!!!</div>
        <Link
          to={"/"}
          className="text-3xl text-white hover:text-black underline decoration-[1px] underline-offset-[4px]"
        >
          {" "}
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
