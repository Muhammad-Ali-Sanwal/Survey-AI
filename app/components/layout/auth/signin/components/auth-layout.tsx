import type React from "react";
import TestimonialCarousel from "./TestimonialCarousel";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex h-[97vh]">
      <div className="fixed w-[560px] xl:w-[680px] 2xl:w-[40%] h-full lg:block hidden p-[23px]">
        <div
          className="relative flex flex-col items-center justify-between h-full w-full bg-no-repeat text-white px-[35px] gap-6"
          style={{
            backgroundImage: "url('/AuthBG.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "18px",
          }}
        >
          <img src="/Logo.svg" className="pt-[75px]" alt="Logo" />
          <p className="font-semibold leading-tight text-center text-[55px] xl:text-[65px]">
            Not a <span className="BadScript font-normal">boring</span> form,
            <br />
            But an interesting <br />
            <span
              className="italic underline underline-offset-10"
              style={{
                textDecorationStyle: "wavy",
                textDecorationColor: "rgba(255, 255, 255, 0.2)",
                textDecorationThickness: "5px",
              }}
            >
              conversation...
            </span>
          </p>
          <div className="pb-8 w-full">
            <TestimonialCarousel />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center lg:justify-start 2xl:justify-center  w-full lg:w-1/2 p-6 lg:ml-[50%]">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
