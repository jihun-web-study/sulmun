import { useAtom, useAtomValue } from "jotai";
import { animeAtom, countryAtom } from "@store/sample";
import { api } from "@/supabase/utils";
import { useState } from "react";

const JotaiSample = () => {
  const anime = useAtomValue(animeAtom);
  const [country, setCountry] = useAtom(countryAtom);
  const [type, setType] = useState("all");

  return (
    <>
      <div>JotaiSample</div>
      <div>
        <div>animes</div>
        {anime.map(({ title, year, watched }, idx) => (
          <div key={idx}>
            <span>{title}</span> &nbsp;
            <span>{year}</span> &nbsp;
            <span>{watched ? "watched" : "yet"}</span>
            <hr />
          </div>
        ))}
      </div>
      <div>{country}</div>
      <button onClick={() => setCountry("korea")}>setCountry</button>
      <div>Sample</div>

      <button
        onClick={async () => {
          const result = await api.post.getPostTotalCountByType("all");
          console.log("r: ", result);
        }}
      >
        count 가져오기
      </button>
      <button
        onClick={async () => {
          const result = await api.post.getPostTotalCountByType("normal");
          console.log("r: ", result);
        }}
      >
        count 가져오기
      </button>
      <button
        onClick={async () => {
          const result = await api.post.getPostTotalCountByType("survey");
          console.log("r: ", result);
        }}
      >
        count 가져오기
      </button>
    </>
  );
};

export default JotaiSample;
