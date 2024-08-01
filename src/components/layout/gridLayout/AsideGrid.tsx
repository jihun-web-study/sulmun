import AsideUserInfo from "@/components/layout/gridLayout/aside/AsideUserInfo";
import AsideBannerSection from "@/components/layout/gridLayout/aside/AsideBannerSection";

const AsideGrid = () => {
  const isLogin = Boolean(localStorage.getItem("sulmun_auth_key"));

  return (
    <aside className="pt-6 w-full h-full flex flex-col gap-5 pr-2 pl-[5%] xl:pr-[calc(100%/6)] bg-[#EEEEEE]">
      {/* 로그인 됐을 경우만 */}
      {isLogin && <AsideUserInfo />}
      {/* 인기 프로젝트들(설문조사 있는 포스팅들) */}
      <AsideBannerSection />
    </aside>
  );
};

export default AsideGrid;
