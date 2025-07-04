import { FaArrowLeft } from "react-icons/fa";
import { Input } from "~/components/ui/input";
import CountrySelect from "./CountrySelect";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";

const PaymentPage = () => {
  const navigate = useNavigate();
  const InputStyles =
    "!border-none !ring-0 bg-white !outline-none shadow-[0px_1px_1.5px_0px_#0000000D] focus:!ring-0 focus:!border-none focus:!outline-none";
  return (
    <div className="flex flex-col mb-4 md:mt-[70px] items-center h-screen justify-center gap-5 lg:flex-row">
      <div className="bg-white max-lg:mt-[300px] w-[95%] px-9 md:w-[60%] lg:w-[40%] py-5  h-screen sm:py-10">
        <div className="mb-8 flex items-center gap-2">
          <FaArrowLeft
            color="rgba(53, 53, 53, 0.4)"
            size={12}
            onClick={() => navigate(-1)}
            className="cursor-pointer"
          />
          <img src="/LogoBlue.svg" alt="logo" />
        </div>
        <span className="font-roboto text-[15px] font-medium leading-5 text-[#645656CC]">
          Payment
        </span>
        <h2 className="leading-12 mb-5 font-roboto text-[32px] font-medium text-[#3D3D3D] md:mb-11 md:text-[36px]">
          $49/ <sub className="text-[13px]">month*</sub>
        </h2>
        <ul className="mb-2 flex justify-between gap-2 font-roboto text-[14px] font-medium leading-[18px] text-[#645656CC]">
          <li>Free Trial</li>
          <li>$49.00</li>
        </ul>
        <div className="border-t border-t-[#E1E1E1] my-5" />
        <ul className="mb-4 flex justify-between gap-2 font-roboto text-[14px] font-medium leading-[18px] text-[#645656CC] md:mb-8">
          <li>Subtotal</li>
          <li>$49.00</li>
        </ul>
        <div className="mb-[18px] border-b border-solid border-[#E1E1E1]">
          <Input
            placeholder="Add promotion code"
            className={`mb-4 text-[black] placeholder:text-[#B1B1B1] font-normal text-[14px] border-none max-w-[170px] bg-[#FAFAFA]  focus:ring-0 !ring-0 !outline-none`}
          />
        </div>
        <ul className="mb-[17px] flex justify-between gap-2 border-b border-solid border-[#E1E1E1] pb-[17px] font-roboto text-[14px] font-medium leading-[18px] text-[#645656CC]">
          <li>Subtotal</li>
          <li>$49.00</li>
        </ul>
        <ul className="mb-8 flex justify-between gap-2 font-roboto text-[14px] font-medium leading-[18px] text-[rgba(100,86,86,0.80)]">
          <li>Total due oday</li>
          <li>$49.00</li>
        </ul>
      </div>
      <div className="md:w-[60%] lg:w-[40%] w-[95%] bg-[#FAFAFA] px-5 md:px-[40px] h-screen pt-10">
        <form className="w-full">
          <div>
            <label className="mb-2 block text-[13px] font-medium leading-4 text-[rgba(26,26,26,0.70)]">
              Email
            </label>
            <Input
              type="email"
              className={`mb-6 h-9 bg-white w-full !ring-0 !outline-none focus:!ring-0 focus:!outline-none rounded-[6px] shadow-[0px_1px_1.5px_0px_#0000000D] px-3 py-2`}
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-[13px] font-medium leading-4 text-[rgba(26,26,26,0.70)]">
              Card information
            </label>
            <div>
              <div className="relative w-full rounded-none rounded-t-[6px] border bg-white">
                <Input
                  type="text"
                  className={InputStyles}
                  placeholder="1234 1234 1234 1234"
                  maxLength={20}
                />
                <img
                  src="/images/cardsIcon.svg"
                  alt="CardIcon"
                  draggable="false"
                  className="absolute right-0 top-0"
                />
              </div>
              <div className="flex w-full rounded-b-md border border-b-[1px] border-t-0">
                <Input
                  type="text"
                  className={`${InputStyles} bg-white w-[50%]`}
                  placeholder="MM / YY"
                />

                <div className="flex justify-between items-center border-l-[1px] bg-white">
                  <Input
                    type="text"
                    className={`${InputStyles} w-[50%]`}
                    placeholder="CVC"
                    maxLength={3}
                  />
                  <img
                    src="/images/cvcIcon.svg"
                    alt="cvcIcon"
                    draggable="false"
                    className="mr-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-[13px] font-medium leading-4 text-[rgba(26,26,26,0.70)]">
              Cardholder name
            </label>
            <Input
              type="text"
              className={` w-full border-[1px] bg-white !ring-0 !outline-none !shadow-none focus:!ring-0 focus:!outline-none`}
              placeholder="Full name on card"
            />
          </div>
          <div className="mb-[22px]">
            <label className="mb-2 block text-[13px] font-medium leading-4 text-[rgba(26,26,26,0.70)]">
              Country or region
            </label>
            <CountrySelect />
            <Input
              type="text"
              className={`-mt-[2px] bg-white rounded-none rounded-b-md w-full !ring-0 !outline-none !shadow-none focus:!ring-0 focus:!outline-none`}
              placeholder="ZIP"
            />
          </div>
          <div className="w-full">
            <div className="min-h-[90px] rounded-md rounded-b-none border bg-white pl-[12px] pt-[8px]">
              <h4 className="mb-1 text-[14px] font-medium text-[rgba(26,26,26,0.90)]">
                Securely save my information for 1-click checkout
              </h4>
              <p className="text-[13px] font-normal text-[#1A1A1AB2]">
                Enter your phone number to create a Link account and pay faster
                on LEADER ADS LTD and everywhere Link is accepted.
              </p>
            </div>
            <div className="mb-2 flex w-full items-center rounded-b-[6px] border border-t-0 bg-white pr-3">
              <span className="flex w-full items-center gap-2 px-4 text-[14px] font-normal text-[rgba(26,26,26,0.5)] outline-none">
                <img src="/images/usaFlag.svg" alt="Flag" />{" "}
                <Input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="(201) 555-0123"
                  className="w-full border-[1px] focus:border-[1px] focus:border-gray-200 !ring-0 !outline-none border-none !shadow-none focus:!ring-0 focus:!outline-none"
                />
              </span>
              <span className="h-[22px] rounded-[6px] border border-[rgba(26,26,26,0.2)] px-[5px] py-[3px] text-center text-[12px] leading-4 text-[rgba(26,26,26,0.5)]">
                Optional
              </span>
            </div>
            <div className="mb-[22px] flex items-center justify-center gap-2">
              <img src="/images/linkIcon.svg" alt="linkIcon" />
              <span className="text-[12px] text-[rgba(26,26,26,0.30)]">.</span>
              <a
                href="#"
                className="text-[12px] font-normal leading-4 text-[rgba(26,26,26,0.70)] underline"
              >
                More info
              </a>
            </div>
            <Button
              className="w-full max-lg:mb-8"
              type="button"
              onClick={() => navigate("/survey-builder")}
            >
              Pay
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
