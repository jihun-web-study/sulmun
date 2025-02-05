import HeaderGrid from "@/components/layout/gridLayout/HeaderGrid";
import NavGrid from "@/components/layout/gridLayout/NavGrid";
import AsideGrid from "@/components/layout/gridLayout/AsideGrid";
import { Outlet } from "react-router-dom";

const GridLayout = () => {
  return (
    // grid-cols-[minmax(7fr, 420px)_15fr_7fr]
    <div className="grid grid-cols-[1fr_3fr_1fr] xl:grid-cols-[360px_3fr_360px] grid-rows-[auto_1fr] w-screen h-screen overflow-hidden">
      <HeaderGrid />
      <NavGrid />
      <main className="py-6 bg-[#EEEEEE] lg:pl-0 w-full h-full flex flex-col w-full justify-self-center overflow-y-auto scrollbar-hide children-shrink-0">
        <Outlet />
      </main>
      <AsideGrid />
    </div>
  );
};

export default GridLayout;
