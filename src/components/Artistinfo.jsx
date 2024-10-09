"use client";
import { useCallback } from "react";
import PropTypes from "prop-types";
import { FaInstagram, FaRegCopy } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
const ArtistInfo = ({ className = "" }) => {
  const onGlobeIconClick = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start py-10 mx-2 bg-[url('/artist-info@3x.png')] bg-cover bg-no-repeat bg-top max-w-full text-left text-[1.375rem] text-croc-primary-white font-segoe-ui ${className}`}
    >
      <div className="w-full max-w-5xl flex flex-col items-start justify-start">
        <div className="w-full flex flex-col sm:flex-row items-start justify-between gap-5">
          <div className="flex flex-col gap-6 min-w-[16rem] sm:w-full">
            <h1 className="text-[2.5rem] font-semibold capitalize leading-[110%] w-full sm:text-[2.563rem] sm:leading-10  text-left">
              Aditya
            </h1>
            <div className="flex gap-5 text-[1.75rem] sm:flex-wrap">
              <div className="flex flex-col items-start justify-start min-w-[7.375rem]">
                <b className="leading-[140%] capitalize">250k+</b>
                <h3 className="text-[1.375rem] font-normal capitalize">
                  Volume
                </h3>
              </div>
              <div className="flex flex-col items-start justify-start min-w-[7.375rem]">
                <b className="leading-[140%] capitalize">50+</b>
                <h3 className="text-[1.375rem] font-normal capitalize">
                  NFTs Sold
                </h3>
              </div>
              <div className="flex flex-col items-start justify-start min-w-[7.375rem]">
                <b className="leading-[140%] capitalize">3000+</b>
                <h3 className="text-[1.375rem] font-normal capitalize">
                  Followers
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold capitalize">Bio</h3>
              <h3 className="font-normal capitalize">
                The internet's friendliest designer kid.
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="capitalize">Links</h3>
              <div className="flex gap-2">
                <RxDiscordLogo
                  className="h-8 w-8 cursor-pointer"
                  onClick={onGlobeIconClick}
                />
                <FaXTwitter
                  className="h-8 w-8 cursor-pointer"
                  onClick={onGlobeIconClick}
                />
                <FaInstagram
                  className="h-8 w-8 cursor-pointer"
                  onClick={onGlobeIconClick}
                />
              </div>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <button className="flex items-center gap-2 py-4 px-5 bg-chocolate-300 rounded-xl border border-chocolate-200 hover:bg-coral-200">
              <FaRegCopy className="h-5 w-5" />
              <div className="text-sm font-semibold">0xc0E3...B79C</div>
            </button>
            <button className="flex items-center gap-2 py-4 px-7 border-2 border-chocolate-200 rounded-xl hover:bg-coral-300">
              <img className="h-5 w-5" alt="" src="/plus.svg" />
              <div className="text-sm font-semibold">Follow</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

ArtistInfo.propTypes = {
  className: PropTypes.string,
};

export default ArtistInfo;
