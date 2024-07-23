import { Link, useLocation } from "react-router-dom";

type NavMenuProps = {
  to: string;
  children: React.ReactNode;
};

const NavMenu = ({ to, children }: NavMenuProps) => {
  const location = useLocation();
  const pathName = location.pathname;
  const firstPath = pathName.split("/")[1];
  const splitTo = to.split("/")[1];
  console.log(to, splitTo, pathName, firstPath);

  return (
    <li className="w-full">
      <Link
        to={to}
        className={`bg-green-200 block ${
          firstPath === splitTo ? `w-full` : "w-[90%]"
        } h-full p-[16px] text-inherit no-underline font-bold`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavMenu;
