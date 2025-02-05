import { FormEvent, useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit ", value);
  };

  return (
    <form onSubmit={onSubmit} className="w-full h-full flex items-center">
      <input
        type="text"
        value={value}
        placeholder="검색 키워드"
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-1/2 px-3 placeholder:text-center rounded-lg text-[#999999] bg-[#F2F2F2]"
      />
    </form>
  );
};

export default SearchBar;
