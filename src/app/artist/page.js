import ArtistInfo from "@/components/Artistinfo";

const ArtistPageDesktop = () => {
  return (
    <div className="w-full relative bg-black flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-center text-[1.375rem] text-caption-label-text font-basebody-work-sans">
      <section className="self-stretch flex flex-col items-center justify-start max-w-full">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/placeholder.png"
        />
        <div className="w-[68.125rem] flex flex-row items-start justify-start py-[0rem] px-[1.25rem] box-border max-w-full z-[1] mt-[-4.375rem]">
          <div className="rounded-xl flex flex-row items-start justify-start border-[2px] border-solid border-chocolate-200">
            <img
              className="h-[7.5rem] w-[7.5rem] relative object-cover"
              loading="lazy"
              alt=""
              src="/asset1.png"
            />
          </div>
        </div>
      </section>
      <ArtistInfo />
      <div className="w-full flex flex-col gap-2">
        <div className="w-full border-t border-background-secondary"></div>
        <div className="w-full flex justify-center px-5">
          <div className="flex flex-wrap justify-start w-full max-w-[65rem]">
            <div className="flex-1 flex flex-col items-center py-3 px-5 border-b-2 border-caption-label-text min-w-[8.75rem]">
              <h3 className="text-white font-semibold capitalize text-lg">
                Created
              </h3>
              <div className="bg-caption-label-text rounded-xl py-1 px-3">
                <span className="text-white text-sm">302</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center py-3 px-5 min-w-[8.75rem]">
              <h3 className="text-white font-semibold capitalize text-lg">
                Owned
              </h3>
              <div className="bg-background-secondary rounded-xl py-1 px-3">
                <span className="text-white text-sm">67</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center py-3 px-5 min-w-[8.75rem]">
              <h3 className="text-white font-semibold capitalize text-lg">
                Collection
              </h3>
              <div className="bg-background-secondary rounded-xl py-1 px-3">
                <span className="text-white text-sm">4</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-col items-center justify-start py-20 px-5 gap-7 bg-[url('/nftcardsection.png')] bg-cover bg-no-repeat bg-center w-full text-left text-lg text-white font-sans">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {/* Brow i think NFT card ka alag componenets hai so please use that insted of creating new componenets*/}
          {Array(3)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="rounded-xl bg-chocolate-300 border border-chocolate-200 flex flex-col"
              >
                <img
                  className="w-full rounded-t-xl object-cover"
                  alt="NFT Image"
                  src="/nft1.png"
                />
                <div className="w-full p-5 flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold capitalize">
                      Distant Galaxy
                    </h3>
                    <div className="flex items-center gap-3 text-sm font-mono">
                      <img
                        className="h-6 w-6 rounded-full object-cover"
                        alt="Profile"
                        src="/prpic.png"
                      />
                      <span>Aditya</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm font-mono text-caption-label-text">
                    <div>
                      <p>Price</p>
                      <p className="text-white text-base">1.63 ETH</p>
                    </div>
                    <div className="text-right">
                      <p>Highest Bid</p>
                      <p className="text-white text-base">0.33 wETH</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ArtistPageDesktop;
