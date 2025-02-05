import Header from "@components/layout/HeaderFlex";
import Nav from "@components/layout/NavFlex";
import Aside from "@components/layout/AsideFlex";

type FlexLayoutProps = {
  children: React.ReactNode;
};

const FlexLayout = ({ children }: FlexLayoutProps) => {
  return (
    // grid-cols-[minmax(7fr, 420px)_15fr_7fr]
    <div className="grid grid-cols-1 grid-rows-[auto_1fr] w-screen h-screen overflow-hidden">
      <Header />
      <div className="flex justify-between w-full">
        <Nav />
        <main className="bg-yellow-500 flex flex-col w-full justify-self-center overflow-y-auto scrollbar-hide children-shrink-0">
          {children}
        </main>
        <Aside />
      </div>
    </div>
  );
};

export default FlexLayout;
