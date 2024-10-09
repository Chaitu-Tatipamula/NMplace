import Image from "next/image";
import PropTypes from "prop-types";

const NFTCardOneInfo = ({ className = "", image, owner, NFT, Eth }) => {
  return (
    <div className="relative">
      <Image
        src={image}
        width={500}
        height={400}
        alt="image"
        loading="lazy"
        className="relative"
      />
      <div className="absolute bottom-0 left-0 w-full backdrop-filter backdrop-blur-lg rounded-lg bg-gray-300 box-border flex  md:flex-row items-start md:items-center justify-between p-4 gap-4 z-10 border border-solid border-gray-500">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-start justify-start">
              <div className="relative tracking-wide leading-none font-semibold text-lg md:text-xl z-20">
                {NFT}
              </div>
            </div>
            <div className="relative text-sm md:text-base text-gray-400 z-20">
              {owner}
            </div>
          </div>
          <b className="relative text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300 z-20">
            {Eth}
          </b>
        </div>
        <button className="cursor-pointer py-2 px-6 bg-transparent rounded-full bg-gradient-to-r from-blue-200 to-orange-400 flex items-center justify-center z-20 border border-solid border-tomato-100 hover:bg-orange-500">
          <div className="relative text-lg font-medium text-white">
            Collect Now
          </div>
        </button>
      </div>
    </div>
  );
};

export default NFTCardOneInfo;
