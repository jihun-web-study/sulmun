import { useAtomValue } from "jotai";
import { countryAtom } from "@/store/sample";

const HomePage = () => {
  const country = useAtomValue(countryAtom);

  return (
    <div className="flex flex-col gap-2">
      <div>{`county: ${country}`}</div>
      <div>Main Content</div>
      <div className="h-[100px] bg-yellow-200">'hi'</div>
      <div className="h-[100px] bg-yellow-200">hi</div>
      <div className="h-[100px] bg-yellow-200">hi</div>
      <div className="h-[100px] bg-yellow-200">hi</div>
      <div className="h-[100px] bg-yellow-200">hi</div>
      <div className="h-[100px] bg-yellow-200">hi</div>
      <div className="h-[100px] bg-yellow-200">hi</div>
      <div className="h-[100px] bg-yellow-200">hi</div>
      <div className="h-[100px] bg-yellow-200">hi</div>
      <div className="h-[100px] bg-yellow-200">hi</div>
      <div className="h-[100px] bg-yellow-200">End</div>
    </div>
  );
};

export default HomePage;
