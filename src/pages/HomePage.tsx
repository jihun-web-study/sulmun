//import { useAtomValue } from "jotai";
//import { countryAtom } from "@/store/sample";
import { useEffect, useState } from "react";
import HomePostingButton from "@/components/home/HomePostingButton";
import HomePostComponent from "@/components/home/HomePostComponent";
import { fetchAllPosts } from "@/supabase/utils";

import { samplePost } from "@/store/sample";
import { Json } from "@/supabase/supabaseTypes";

const HomePage = () => {
  const [allPosts, setAllPosts] = useState<Json>([]);
  //const country = useAtomValue(countryAtom);

  useEffect(() => {
    (async function getPosts() {
      const data = await fetchAllPosts();

      if (data) setAllPosts(data);
      console.log(allPosts);
    })();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <HomePostingButton />

      {samplePost.map((data) => (
        <HomePostComponent key={data.post_id} postData={data} />
      ))}
    </div>
  );
};

export default HomePage;
