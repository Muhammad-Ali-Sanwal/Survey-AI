const CustomRadioButton = ({ selected, onChange }: any) => {
  const options = ["Customers", "Employees", "Students", "General Public"];

  return (
    <div className="flex my-[32px] flex-col gap-5">
      <p className="font-semibold text-[#252525] text-[14px]">
        Who will you ask?
      </p>
      <div className="grid grid-cols-2 gap-5">
        {options.map((option) => (
          <label
            key={option}
            className={`flex justify-between items-center border rounded-md px-4 py-3 cursor-pointer font-medium text-[16px] ${
              selected === option
                ? "border-[#1E42FF] text-[#1E42FF]"
                : "border-[#E4E4E7] text-[#71717A]"
            }`}
          >
            {option}
            <input
              type="radio"
              name="audience"
              value={option}
              checked={selected === option}
              onChange={() => onChange(option)}
              className="appearance-none w-4 h-4 border border-[#D1D5DB] rounded-full checked:border-[4px] checked:border-[#2563EB]"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default CustomRadioButton;
