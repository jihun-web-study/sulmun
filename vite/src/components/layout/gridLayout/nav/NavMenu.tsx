import { Link, useLocation } from "react-router-dom";

type NavMenuProps = {
  to: string;
  children: React.ReactNode;
};

const NavMenu = ({ to, children }: NavMenuProps) => {
  const pathName = useLocation().pathname;
  const currentPathname = pathName.split("/").at(1);
  const menuPathname = to.split("/").at(1);

  return (
    <li className="w-full">
      <Link
        to={to}
        className={`block rounded-lg border border-[#EEEEEE]  h-full p-[16px] no-underline font-bold 
        ${
          currentPathname === menuPathname
            ? `w-full bg-[#94C5C5] text-white hover:text-white`
            : "w-[90%] text-black border-gray-300 hover:border-proj-color"
        } `}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavMenu;
