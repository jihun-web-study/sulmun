import { useAtom } from "jotai";
import { countAtom, countryAtom, citiesAtom, animeAtom } from "../store/sample";

const Sample = () => {
  const [anime, setAnime] = useAtom(animeAtom);

  return (
    <>
      <div>Sample</div>
      <div>
        <div>animes</div>
        {anime.map(({ title, year, watched }, idx) => (
          <div key={idx}>
            <span>{title}</span> &nbsp;
            <span>{year}</span> &nbsp;
            <span>{watched ? "watched" : "yet"}</span>
          </div>
        ))}
      </div>
      <div>Sample</div>
    </>
  );
};

export default Sample;
