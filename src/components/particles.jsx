"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/magicui/particles";

const ParticlesSty = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#ffffff");
  }, [theme]);

  return (
    <div className="dark bg-black relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden  bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 line-clamp-5">
        <img src="/star.svg" alt="" className="absolute top-10" />
        <img
          class="absolute h-full top-[-18rem] bottom-[0rem] right-[-4.75rem] max-h-full w-[18.706rem] rotate-12 object-contain"
          loading="lazy"
          alt=""
          src="/sideassests2.png"
        ></img>
        Discover More{" "}
        <img
          className="self-stretch flex-1 relative rounded-[539.88px] max-w-full overflow-hidden max-h-full object-cover min-w-[6.688rem] min-h-[4.188rem]  w-80 inline-flex"
          loading="lazy"
          alt=""
          src="/roundedone.png"
        />
        NFTs
        <div class="h-[13.063rem] w-[4.25rem] absolute top-40 left-[75rem] rounded-123xl box-border border-[1px] border-solid border-deepskyblue"></div>
        <h3>
          Explore new{" "}
          <img
            className="self-stretch flex-1 relative rounded-[539.88px] max-w-full overflow-hidden max-h-full object-cover min-w-[6.688rem] min-h-[3.188rem]  h-14 inline-flex"
            loading="lazy"
            alt=""
            src="/roundedtwo.png"
          />
          trending NFTs
          <img src="/star.svg" alt="" className="absolute top-30 left-2/3" />
        </h3>
        <img
          class="absolute h-full top-[8rem] bottom-[0rem] left-[-4.75rem] max-h-full w-[18.706rem] max-[760px]:hidden  object-contain"
          loading="lazy"
          alt=""
          src="/sideassests1.png"
        />
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default ParticlesSty;
