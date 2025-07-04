interface AuthDividerProps {
  text: string;
}

export function AuthDivider({ text }: AuthDividerProps) {
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="px-3 bg-white text-[#9C9C9C] text-[12px] leading-[24px] font-normal">
          {text}
        </span>
      </div>
    </div>
  );
}
