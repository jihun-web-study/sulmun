import { Link } from "react-router-dom";

const BackToLogin = () => {
  return (
    <Link
      to={"/auth/signin"}
      className="absolute top-5 left-5 flex items-center gap-1 text-[#666666]"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 5.9999C4 6.1999 4.1 6.3999 4.2 6.4999L7.5 9.7999C7.8 10.0999 8.3 10.0999 8.6 9.7999C8.9 9.4999 8.9 8.9999 8.6 8.6999L5.9 5.9999L8.6 3.2999C8.9 2.9999 8.9 2.4999 8.6 2.1999C8.3 1.8999 7.8 1.8999 7.5 2.1999L4.3 5.3999C4.1 5.5999 4 5.7999 4 5.9999Z"
          fill="#666666"
          className="fill-current hover:fill-proj-color"
        />
      </svg>
      로그인으로 돌아가기
    </Link>
  );
};

export default BackToLogin;
