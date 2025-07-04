import React from "react";
import { LuSearch } from "react-icons/lu";

const SearchBar = ({ placeholder = "Search", ...props }) => {
  return (
    <div className="flex h-[44px] max-w-[235px] lg:w-[250px] items-center rounded-[6px] bg-[#EFEFEF] outline-none transition-colors focus-within:border-[#9ca3af] focus-within:ring-1 focus-within:ring-gray-400 shadow-[0px_0.95px_1.89px_0px_rgba(16,24,40,0.05)]">
      <div className="pl-[12px] pr-2">
        <LuSearch className="text-[#71717a]" height={12} width={12} />
      </div>
      <input
        type="text"
        className="bg-[#efefef] w-full mt-[2px] placeholder:text-[#71717A] text-[15px] font-normal text-[#71717A] focus:border-0 !border-none !ring-0 !outline-none !shadow-none focus:!ring-0 focus:!border-none focus:!outline-none"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default SearchBar;
