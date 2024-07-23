type CheckButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const CheckButton = ({ onClick, children }: CheckButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-1/3 h-[50px] px-4 text-base rounded-[10px] bg-proj-color text-white"
    >
      {children}
    </button>
  );
};

export default CheckButton;
