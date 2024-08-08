import Logo from "@/components/layout/gridLayout/header/Logo";
import SearchBar from "@/components/layout/gridLayout/header/SearchBar";
import UserInfo from "@/components/layout/gridLayout/header/UserInfo";

const HeaderGrid = () => {
  return (
    <header className="col-span-3 w-full h-[80px] grid grid-cols-[1fr_3fr_1fr] xl:grid-cols-[360px_3fr_360px] items-center border-b-2 border-[#EEEEEE]">
      <Logo />
      <SearchBar />
      <UserInfo />
    </header>
  );
};

export default HeaderGrid;
