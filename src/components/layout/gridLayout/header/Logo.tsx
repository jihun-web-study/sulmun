import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <h1 className="w-full h-full xl:pl-[60px] flex items-center">
      <Link to={"/"} className="text-proj-color font-bold text-3xl pl-2">
        SULMUN
      </Link>
    </h1>
  );
};

export default Logo;
