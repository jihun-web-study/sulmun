import AsideBanner from "@/components/layout/gridLayout/aside/AsideBanner";

import { samplePopularPosts } from "@/store/sample";

const AsideBannerSection = () => {
  return (
    <section className="w-full h-auto flex flex-col gap-3">
      <strong className="text-base">일간 인기순</strong>
      {samplePopularPosts.map((post) => (
        <AsideBanner key={post.post_id} bgImage={post.image} />
      ))}
    </section>
  );
};

export default AsideBannerSection;
