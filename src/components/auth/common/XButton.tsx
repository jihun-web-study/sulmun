import xSvg from "@/assets/svg/x.svg";

const XButton = () => {
  return (
    <button className="absolute top-5 right-5">
      <img src={xSvg} alt="닫기버튼" />
    </button>
  );
};

export default XButton;
