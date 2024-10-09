import NFTCardOneInfo from "./NFTcard";
const TrendingThisWeek = ({ className = "" }) => {
  const nfttop = [
    {
      NFT: "Treding 1",
      owner: "Miles Grogosters",
      Eth: "4.99 ETH",
      image: "/Tnft1.png",
    },
    {
      NFT: "Treding 2",
      owner: "Owner 2",
      Eth: "2.99 ETH",
      image: "/Tnft2.png",
    },
    {
      NFT: "Treding 3",
      owner: "Owner 3",
      Eth: "3.99 ETH",
      image: "/Tnft3.png",
    },
    {
      NFT: "Treding 4",
      owner: "Owner 4",
      Eth: "1.99 ETH",
      image: "/Tnft4.png",
    },
  ];
  return (
    <section className="dark relative py-5 mx-5">
      <div className="flex flex-col items-center justify-center px-4 max-w-full h-full text-center text-white">
        <div className="flex flex-col items-center justify-start gap-2 max-w-full">
          <h1 className="m-0 text-5xl leading-[2.875rem] capitalize font-semibold font-inherit mq450:text-[1.438rem] mq450:leading-[1.688rem] mq1050:text-[1.875rem] mq1050:leading-[2.25rem]">
            Trending Collection
          </h1>
          <h3 className="m-0 text-[1.375rem] leading-[160%] capitalize font-normal font-inherit mq450:text-[1.125rem] mq450:leading-[1.75rem]">
            Checkout our weekly updated trending collection.
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {nfttop.map((nft) => (
          <NFTCardOneInfo key={nft.NFT} {...nft} />
        ))}
      </div>
    </section>
  );
};

export default TrendingThisWeek;
