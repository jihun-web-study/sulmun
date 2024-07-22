import { Link, useLocation } from "react-router-dom";

const NavGrid = () => {
  const location = useLocation();
  const pathName = location.pathname;

  console.log(1, pathName);

  //const links = [{ text: "Home", to: "/" }];

  // full: 400px
  // pl: 120px => 30%| box: 280px => 70%

  return (
    //xl:pl-[40%]
    <nav className="w-full">
      <ul className="flex flex-col gap-2 w-full xl:pl-[calc(100%/6)]">
        <Link to={"/"} className="bg-green-200 w-full ">
          Home
        </Link>
        <Link to={"/sample"} className="bg-green-200 w-full">
          Sample
        </Link>
        <Link to={"/"} className="bg-green-200 w-full">
          temp home
        </Link>
        <Link to={"/error"} className="bg-green-200 w-full">
          error
        </Link>
      </ul>
    </nav>
  );
};

export default NavGrid;
