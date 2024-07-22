import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-400 bg-opacity-50 flex justify-center items-center">
      <div className="w-2/4 h-2/4 flex flex-col justify-center items-center bg-green-500">
        <div>404 Error!!!</div>
        <Link to={"/"}> 홈으로 돌아가기</Link>
      </div>
    </div>
  );
};

export default NotFound;
