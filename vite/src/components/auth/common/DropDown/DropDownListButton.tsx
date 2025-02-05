type ListButtonTypes = {
  text: string;
  onClick: () => void;
};

const DropDownListButton = ({ text, onClick }: ListButtonTypes) => {
  return (
    <button
      className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default DropDownListButton;
