import Logo from "@/components/layout/gridLayout/header/Logo";
import SearchBar from "@/components/layout/gridLayout/header/SearchBar";
import User from "@/components/layout/gridLayout/header/User";

const HeaderGrid = () => {
  return (
    <header className="col-span-3 bg-blue-500 xl:px-[60px] w-full h-[80px] grid grid-cols-[1fr_3fr_1fr] xl:grid-cols-[360px_3fr_360px] items-center">
      <Logo />
      <SearchBar />
      <User />
    </header>
  );
};

export default HeaderGrid;
