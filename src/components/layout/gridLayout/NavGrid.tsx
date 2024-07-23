import NavMenu from "@/components/layout/gridLayout/NavMenu";

const NavGrid = () => {
  const menus = [
    { text: "Sample", to: "/sample" },
    { text: "Error", to: "/error" },
    { text: "홈", to: "/" },
    { text: "SignIn", to: "/auth/signin" },
    { text: "SignUp", to: "/auth/signup" },
    { text: "post", to: "/post/3" },
    { text: "posting", to: "/posting" },
  ];

  return (
    //xl:pl-[40%]
    <nav className="w-full pr-[10%]">
      <ul className="flex flex-col gap-[6px] w-full xl:pl-[calc(100%/6)]">
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
