import { Link } from "react-router-dom";

const SignOutBox = () => {
  return (
    <Link
      to={"/auth/signin"}
      className="bg-white border rounded-xl w-full lg:w-4/5 max-w-[150px] h-[62.5%] flex justify-center items-center px-1 pr-2 hover:border-proj-color"
    >
      <span className="font-semibold">로그인</span>
    </Link>
  );
};

export default SignOutBox;
