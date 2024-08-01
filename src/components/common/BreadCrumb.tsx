import { MENUS } from "@/utils/constants";

const BreadCrumb = ({ menu }: { menu: "home" | "survey" }) => {
  return (
    <div className="flex items-center gap-3">
      <button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 11.9998C8 12.3998 8.2 12.7998 8.4 12.9998L15 19.5998C15.6 20.1998 16.6 20.1998 17.2 19.5998C17.8 18.9998 17.8 17.9998 17.2 17.3998L11.8 11.9998L17.2 6.5998C17.8 5.9998 17.8 4.9998 17.2 4.3998C16.6 3.7998 15.6 3.7998 15 4.3998L8.6 10.7998C8.2 11.1998 8 11.5998 8 11.9998Z"
            fill="#666666"
          />
        </svg>
      </button>
      <div className=" text-base leading-4 font-bold text-[#666666]">{MENUS[menu]}</div>
    </div>
  );
};

export default BreadCrumb;
