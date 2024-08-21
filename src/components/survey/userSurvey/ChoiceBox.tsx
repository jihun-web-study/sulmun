import { useState } from "react";

interface IChoiceBoxProps {
  question: {
    id: number;
    question_type: "choice" | "essay";
    question_title: string;
    question_options: { number: number; option: number | string }[];
  };
}

const ChoiceBox = ({ question }: IChoiceBoxProps) => {
  console.log(question);

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    // onSelect(event.target.value); // 부모에게 선택된 값 전달
  };

  return (
    <div>
      {question.question_options.map((option) => (
        <div key={option.number}>
          <input
            type="radio"
            id={`number-${option.number}`}
            name="number"
            value={option.number}
            checked={selectedValue === option.number.toString()}
            onChange={handleChange}
          />
          <label htmlFor={`number-${option.number}`}>{option.number}</label>
        </div>
      ))}
    </div>
  );
};

export default ChoiceBox;
