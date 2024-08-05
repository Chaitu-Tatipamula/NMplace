import { Nftmarketcard } from "./NFTmarketcard";

export function NFTBrowse() {
  return (
    <div
      className={`relative  w-full flex flex-col items-center justify-start py-[5rem] px-[1.25rem] box-border gap-[3.75rem] max-w-full z-[5] text-left text-[2.375rem] text-croc-primary-white font-segoe-ui lg:gap-[1.875rem] `}
    >
      <div className="w-full h-full absolute !m-[0] top-[0rem]  bottom-[0rem] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_107,_47,_0.5),_rgba(6,_19,_45,_0))] z-[-1]" />
      <div className="w-[65.625rem] flex flex-row items-start justify-start max-w-full">
        <div className="w-[48rem] flex flex-col items-start justify-start gap-[0.625rem] max-w-full flex-wrap">
          <h1 className="m-0 self-stretch relative text-inherit leading-[2.875rem] capitalize font-semibold font-inherit mq450:text-[1.438rem] mq450:leading-[1.688rem] mq1050:text-[1.875rem] mq1050:leading-[2.25rem] ">
            Discover More NFTs
          </h1>
          <h3 className="m-0 self-stretch relative text-[1.375rem] leading-[160%] capitalize font-normal font-inherit mq450:text-[1.125rem] mq450:leading-[1.75rem]">
            Explore new trending NFTs
          </h3>
        </div>
        <button className="cursor-pointer py-[1rem] px-[3rem] bg-tomato-400 w-[11.375rem] rounded-xl box-border flex flex-row items-center justify-center gap-[0.75rem] whitespace-nowrap border-[2px] border-solid border-tomato-100 hover:bg-orangered-300 hover:box-border hover:border-[2px] hover:border-solid hover:border-orangered-100">
          <img
            className="h-[1.25rem] w-[1.25rem] relative"
            alt=""
            src="/eye.svg"
          />
          <div className="w-[3.125rem] relative text-[1rem] leading-[140%] font-semibold font-segoe-ui text-croc-primary-white text-center inline-block min-w-[3.125rem]">
            See All
          </div>
        </button>
      </div>
      <div className=" relative  flex items-center justify-center flex-wrap gap-4 md:w-4/5 ">
        <Nftmarketcard />
        <Nftmarketcard />
        <Nftmarketcard />
        <Nftmarketcard />
        <Nftmarketcard />
        <Nftmarketcard />
      </div>
    </div>
  );
}
