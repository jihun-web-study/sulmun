import ToggleButton from "@/components/common/ToggleButton";

interface OptionItem {
  option_number: number;
  option: string;
}

interface TemplateTypeBoxProps {
  item: {
    id: number;
    title: string;
    type: "essay" | "choice";
    options: OptionItem[];
  };
  updateItemTitle: (id: number, title: string) => void;
  deleteItem: (id: number) => void;
  toggleMode: (id: number) => void;
  addOption: (itemId: number) => void;
  updateOption: (itemId: number, optionId: number, value: string) => void;
  deleteOption: (itemId: number, optionNumber: number) => void;
}

const TemplateTypeBox = ({
  item,
  updateItemTitle,
  deleteItem,
  toggleMode,
  addOption,
  updateOption,
  deleteOption,
}: TemplateTypeBoxProps) => {
  return (
    <div key={item.id} className="w-full p-5 flex flex-col bg-white border-[#EEEEEE] rounded">
      <div className="flex items-center gap-6 mb-2">
        <input
          value={item.title}
          onChange={(e) => updateItemTitle(item.id, e.target.value)}
          placeholder={`질문을 입력해주세요`}
          className="flex-grow mr-2 p-2 text-xl bg-[#F6F6F6] border-b border-[#5B5B5B]"
        />

        <ToggleButton
          onClick={() => toggleMode(item.id)}
          initialToggle={item.type === "choice"}
          initialValue={"주관식"}
          toggleValue={"객관식"}
        />
      </div>

      {item.type === "choice" && (
        <div>
          {item.options.map((option) => (
            <div key={option.option_number} className="w-full h-auto flex items-center mb-2">
              <input
                value={option.option}
                onChange={(e) => updateOption(item.id, option.option_number, e.target.value)}
                placeholder={`응답을 입력해주세요`}
                className="w-1/2 mr-3 p-2 bg-[#F6F6F6] rounded-md"
              />
              <button onClick={() => deleteOption(item.id, option.option_number)} className="text-[#d24747]">
                옵션 삭제
              </button>
            </div>
          ))}

          <button
            onClick={() => addOption(item.id)}
            className="mt-2 px-10 py-2 rounded-lg bg-proj-sub-color text-white"
          >
            답변 추가
          </button>
        </div>
      )}
      <button onClick={() => deleteItem(item.id)} className="mt-10 text-[#d24747] self-end">
        아이템 삭제
      </button>
    </div>
  );
};

export default TemplateTypeBox;
