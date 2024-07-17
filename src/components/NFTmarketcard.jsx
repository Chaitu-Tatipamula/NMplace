import Image from "next/image";

export function Nftmarketcard() {
  return (
    <div className="flex w-11/12 h-4/5 md:w-80">
      <div className="rounded-xl bg-chocolate-500 box-border flex flex-col items-center justify-start max-w-full border-[1px] border-solid border-chocolate-200">
        <div className="self-stretch flex-1 rounded-t-xl rounded-b-none flex flex-col items-start justify-start">
          <Image alt="" src="/Tnft1.png" width={500} height={400} />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-[1.25rem] px-[1.875rem] pb-[1.562rem] gap-[1.562rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.312rem]">
            <h3 className="m-0 self-stretch relative text-3xl leading-[1.938rem] capitalize font-semibold font-inherit mq450:text-[1.125rem] mq450:leading-[1.563rem]">
              Distant Galaxy
            </h3>
            <div className="self-stretch flex flex-row items-start justify-start gap-[0.75rem] text-[1rem]">
              <div className="flex flex-row items-start justify-start">
                <img
                  className="h-[1.5rem] w-[1.5rem] rounded-full relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/Tnft1.png"
                />
              </div>
              <div className="flex-1 relative leading-[140%]">MoonDancer</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start text-[0.75rem] text-caption-label-text">
            <div className="flex-[0.8519] flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[0.5rem]">
              <div className="self-stretch relative leading-[110%]">Price</div>
              <div className="self-stretch relative text-[1rem] leading-[140%] text-croc-primary-white">
                1.63 ETH
              </div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-center gap-[0.5rem] text-right">
              <div className="self-stretch relative leading-[110%]">
                Highest Bid
              </div>
              <div className="self-stretch relative text-[1rem] leading-[140%] text-croc-primary-white">
                0.33 wETH
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
