import { useAtom, useAtomValue } from "jotai";
import { animeAtom, countryAtom } from "@store/sample";

const JotaiSample = () => {
  const anime = useAtomValue(animeAtom);
  const [country, setCountry] = useAtom(countryAtom);

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
    </>
  );
};

export default JotaiSample;
