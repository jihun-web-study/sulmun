import { useState } from "react";

interface OptionItem {
  option_number: number;
  option: string;
}

export interface ListItem {
  id: number;
  title: string;
  type: "essay" | "choice";
  options: OptionItem[];
}

const useTemplateLogics = () => {
  const [questions, setQuestions] = useState<ListItem[]>([]);
  const [nextItemId, setNextItemId] = useState(1);

  const addItem = () => {
    setQuestions([...questions, { id: nextItemId, title: "", type: "essay", options: [] }]);
    setNextItemId(nextItemId + 1);
  };

  const updateItemTitle = (id: number, title: string) => {
    setQuestions(questions.map((item) => (item.id === id ? { ...item, title } : item)));
  };

  const deleteItem = (id: number) => {
    const newItems = questions.filter((item) => item.id !== id);
    setQuestions(newItems.map((item, index) => ({ ...item, id: index + 1 }))); // itemId 재정렬
    setNextItemId(newItems.length + 1);
  };

  const toggleMode = (id: number) => {
    setQuestions(
      questions.map((item) => {
        if (item.id === id) {
          const newType = item.type === "essay" ? "choice" : "essay";
          return {
            ...item,
            type: newType,
            options: newType === "essay" ? [] : item.options, // essay로 전환 시 options 비우기
          };
        }
        return item;
      })
    );
  };

  const addOption = (itemId: number) => {
    setQuestions(
      questions.map((item) => {
        if (item.id === itemId) {
          const nextOptionId = item.options.length > 0 ? Math.max(...item.options.map((o) => o.option_number)) + 1 : 1;
          return {
            ...item,
            options: [...item.options, { option_number: nextOptionId, option: "" }],
          };
        }
        return item;
      })
    );
  };

  const updateOption = (itemId: number, optionId: number, value: string) => {
    setQuestions(
      questions.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            options: item.options.map((opt) => (opt.option_number === optionId ? { ...opt, option: value } : opt)),
          };
        }
        return item;
      })
    );
  };

  const deleteOption = (itemId: number, optionNumber: number) => {
    setQuestions(
      questions.map((item) => {
        if (item.id === itemId) {
          const newOptions = item.options
            .filter((opt) => opt.option_number !== optionNumber)
            .map((opt, index) => ({
              ...opt,
              option_number: index + 1, // option_number 재정렬
            }));
          return { ...item, options: newOptions };
        }
        return item;
      })
    );
  };
  return {
    questions,
    setQuestions,
    addItem,
    updateItemTitle,
    deleteItem,
    toggleMode,
    addOption,
    updateOption,
    deleteOption,
  };
};

export default useTemplateLogics;
