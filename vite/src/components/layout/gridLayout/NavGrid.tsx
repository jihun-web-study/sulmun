import NavMenu from "@/components/layout/gridLayout/nav/NavMenu";

const NavGrid = () => {
  const menus = [
    { text: "홈", to: "/" },
    { text: "설문지", to: "/survey" },
    { text: "마이페이지", to: "/mypage" },
  ];

  return (
    //xl:pl-[40%]
    <nav className="w-full pl-2 pr-[5%] bg-[#EEEEEE]">
      <ul className="pt-6 flex flex-col gap-[6px] w-full xl:pl-[calc(100%/6)]">
        {menus.map((menu, idx) => (
          <NavMenu key={idx} to={menu.to}>
            {menu.text}
          </NavMenu>
        ))}
      </ul>
    </nav>
  );
};

export default NavGrid;
