const QuestionCountSelector = ({ selected, onChange }: any) => {
  const options = [
    { title: "Keep it Quick", description: "3-5 questions" },
    { title: "Balanced", description: "8-12 questions" },
    { title: "Dig Deeper", description: "15+ questions" },
  ];

  return (
    <div className="flex flex-col mb-[40px] gap-5">
      <p className="font-medium text-[#252525] text-[14px]">
        Keep it quick or dig deeper?
      </p>
      <div className="flex flex-col gap-4">
        {options.map((option) => (
          <label
            key={option.title}
            className={`flex flex-col gap-[5px] border rounded-[10px] px-[28px] py-[19px] cursor-pointer ${
              selected === option.title
                ? "border-[#415FFF]"
                : "border-[#E4E4E7]"
            }`}
          >
            <div className="flex justify-between items-center">
              <p
                className={`font-medium ${
                  selected === option.title
                    ? "text-[#1E42FF]"
                    : "text-[#252525]"
                }`}
              >
                {option.title}
              </p>
              <input
                type="radio"
                name="questionCount"
                value={option.title}
                checked={selected === option.title}
                onChange={() => onChange(option.title)}
                className="hidden"
              />
            </div>
            <p
              className={`text-[14px] font-normal ${
                selected === option.title
                  ? "text-[#1E42FF80]"
                  : "text-[#8D8D8D]"
              }`}
            >
              {option.description}
            </p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionCountSelector;
