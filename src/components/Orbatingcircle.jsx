import OrbitingCircles from "@/components/magicui/orbiting-circles";

export function NftCircleAction() {
  return (
    <div className="dark relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-tomato-100 to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-tomato-100 dark:to-black">
        NFT'S
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent "
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.whatsapp />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.notion />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <Icons.googleDrive />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.gitHub />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  gitHub: () => (
    <svg
      width="64"
      height="64"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_9_36661)">
        <rect width="1" height="1" transform="translate(3 4)" fill="#1890FF" />
        <rect width="1" height="1" transform="translate(3 12)" fill="#520339" />
        <rect width="1" height="1" transform="translate(3 10)" fill="#520339" />
        <rect width="1" height="1" transform="translate(3 6)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(4 8)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(4 4)" fill="#40A9FF" />
        <rect width="1" height="1" transform="translate(4 12)" fill="#780650" />
        <rect width="1" height="1" transform="translate(4 10)" fill="#EB2F96" />
        <rect width="1" height="1" transform="translate(4 6)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(5 8)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(5 4)" fill="#40A9FF" />
        <rect width="1" height="1" transform="translate(5 12)" fill="#F759AB" />
        <rect width="1" height="1" transform="translate(5 10)" fill="#780650" />
        <rect width="1" height="1" transform="translate(5 6)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(5 14)" fill="black" />
        <rect width="1" height="1" transform="translate(6 8)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(6 4)" fill="#40A9FF" />
        <rect width="1" height="1" transform="translate(6 12)" fill="#F759AB" />
        <rect width="1" height="1" transform="translate(6 10)" fill="#EB2F96" />
        <rect width="1" height="1" transform="translate(6 6)" fill="black" />
        <rect width="1" height="1" transform="translate(6 14)" fill="#780650" />
        <rect width="1" height="1" transform="translate(7 8)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(7 4)" fill="#40A9FF" />
        <rect width="1" height="1" transform="translate(7 12)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(7 10)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(7 6)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(8 8)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(8 4)" fill="#40A9FF" />
        <rect width="1" height="1" transform="translate(8 12)" fill="#EB2F96" />
        <rect width="1" height="1" transform="translate(8 10)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(8 6)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(9 8)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(9 4)" fill="#40A9FF" />
        <rect width="1" height="1" transform="translate(9 12)" fill="#EB2F96" />
        <rect width="1" height="1" transform="translate(9 10)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(9 6)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(9 14)" fill="#780650" />
        <rect width="1" height="1" transform="translate(10 8)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(10 4)" fill="#40A9FF" />
        <rect
          width="1"
          height="1"
          transform="translate(10 12)"
          fill="#EB2F96"
        />
        <rect
          width="1"
          height="1"
          transform="translate(10 10)"
          fill="#EB2F96"
        />
        <rect width="1" height="1" transform="translate(10 6)" fill="black" />
        <rect
          width="1"
          height="1"
          transform="translate(10 14)"
          fill="#780650"
        />
        <rect width="1" height="1" transform="translate(11 8)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(11 4)" fill="#69C0FF" />
        <rect
          width="1"
          height="1"
          transform="translate(11 12)"
          fill="#F759AB"
        />
        <rect
          width="1"
          height="1"
          transform="translate(11 10)"
          fill="#EB2F96"
        />
        <rect width="1" height="1" transform="translate(11 6)" fill="#874D00" />
        <rect
          width="1"
          height="1"
          transform="translate(12 12)"
          fill="#874D00"
        />
        <rect width="1" height="1" transform="translate(3 5)" fill="#1890FF" />
        <rect width="1" height="1" transform="translate(3 11)" fill="#520339" />
        <rect width="1" height="1" transform="translate(3 7)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(4 9)" fill="#520339" />
        <rect width="1" height="1" transform="translate(4 5)" fill="#40A9FF" />
        <rect width="1" height="1" transform="translate(4 13)" fill="#520339" />
        <rect width="1" height="1" transform="translate(4 3)" fill="#1890FF" />
        <rect width="1" height="1" transform="translate(4 11)" fill="#780650" />
        <rect width="1" height="1" transform="translate(4 7)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(5 9)" fill="#EB2F96" />
        <rect width="1" height="1" transform="translate(5 5)" fill="#40A9FF" />
        <rect width="1" height="1" transform="translate(5 13)" fill="black" />
        <rect width="1" height="1" transform="translate(5 3)" fill="#40A9FF" />
        <rect width="1" height="1" transform="translate(5 11)" fill="#F759AB" />
        <rect width="1" height="1" transform="translate(5 7)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(5 15)" fill="#391085" />
        <rect width="1" height="1" transform="translate(6 9)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(6 5)" fill="#003A8C" />
        <rect width="1" height="1" transform="translate(6 13)" fill="#780650" />
        <rect width="1" height="1" transform="translate(6 3)" fill="#40A9FF" />
        <rect width="1" height="1" transform="translate(6 11)" fill="#780650" />
        <rect width="1" height="1" transform="translate(6 7)" fill="black" />
        <rect width="1" height="1" transform="translate(6 15)" fill="#391085" />
        <rect width="1" height="1" transform="translate(7 9)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(7 5)" fill="#003A8C" />
        <rect width="1" height="1" transform="translate(7 13)" fill="#780650" />
        <rect width="1" height="1" transform="translate(7 3)" fill="#40A9FF" />
        <rect width="1" height="1" transform="translate(7 11)" fill="#EB2F96" />
        <rect width="1" height="1" transform="translate(7 7)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(8 9)" fill="#FFBB96" />
        <rect width="1" height="1" transform="translate(8 5)" fill="#003A8C" />
        <rect width="1" height="1" transform="translate(8 13)" fill="#780650" />
        <rect width="1" height="1" transform="translate(8 3)" fill="#40A9FF" />
        <rect width="1" height="1" transform="translate(8 11)" fill="#EB2F96" />
        <rect width="1" height="1" transform="translate(8 7)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(9 9)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(9 5)" fill="#003A8C" />
        <rect width="1" height="1" transform="translate(9 13)" fill="#780650" />
        <rect width="1" height="1" transform="translate(9 3)" fill="#40A9FF" />
        <rect width="1" height="1" transform="translate(9 11)" fill="#EB2F96" />
        <rect width="1" height="1" transform="translate(9 7)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(9 15)" fill="#391085" />
        <rect width="1" height="1" transform="translate(10 9)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(10 5)" fill="#003A8C" />
        <rect
          width="1"
          height="1"
          transform="translate(10 13)"
          fill="#780650"
        />
        <rect width="1" height="1" transform="translate(10 3)" fill="#69C0FF" />
        <rect
          width="1"
          height="1"
          transform="translate(10 11)"
          fill="#EB2F96"
        />
        <rect width="1" height="1" transform="translate(10 7)" fill="black" />
        <rect
          width="1"
          height="1"
          transform="translate(10 15)"
          fill="#391085"
        />
        <rect width="1" height="1" transform="translate(11 5)" fill="#003A8C" />
        <rect
          width="1"
          height="1"
          transform="translate(11 11)"
          fill="#F759AB"
        />
        <rect width="1" height="1" transform="translate(11 7)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(12 5)" fill="#003A8C" />
        <rect width="1" height="1" transform="translate(13 5)" fill="#003A8C" />
      </g>
      <defs>
        <clipPath id="clip0_9_36661">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  notion: () => (
    <svg
      width="25"
      height="25"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_9_36918)">
        <rect width="1" height="1" transform="translate(3 12)" fill="#5C0011" />
        <rect width="1" height="1" transform="translate(3 10)" fill="#5C0011" />
        <rect width="1" height="1" transform="translate(3 6)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(4 8)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(4 4)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(4 12)" fill="#820014" />
        <rect width="1" height="1" transform="translate(4 10)" fill="#F5222D" />
        <rect width="1" height="1" transform="translate(4 6)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(5 8)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(5 4)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(5 12)" fill="#FF4D4F" />
        <rect width="1" height="1" transform="translate(5 10)" fill="#820014" />
        <rect width="1" height="1" transform="translate(5 6)" fill="black" />
        <rect width="1" height="1" transform="translate(5 14)" fill="black" />
        <rect width="1" height="1" transform="translate(6 8)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(6 4)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(6 12)" fill="#FF4D4F" />
        <rect width="1" height="1" transform="translate(6 10)" fill="#F5222D" />
        <rect width="1" height="1" transform="translate(6 6)" fill="black" />
        <rect width="1" height="1" transform="translate(6 14)" fill="#820014" />
        <rect width="1" height="1" transform="translate(7 8)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(7 4)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(7 12)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(7 10)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(7 6)" fill="black" />
        <rect width="1" height="1" transform="translate(8 8)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(8 4)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(8 12)" fill="#F5222D" />
        <rect width="1" height="1" transform="translate(8 10)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(8 6)" fill="black" />
        <rect width="1" height="1" transform="translate(9 8)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(9 4)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(9 12)" fill="#F5222D" />
        <rect width="1" height="1" transform="translate(9 10)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(9 6)" fill="black" />
        <rect width="1" height="1" transform="translate(9 14)" fill="#820014" />
        <rect width="1" height="1" transform="translate(10 8)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(10 4)" fill="#CCCCCC" />
        <rect
          width="1"
          height="1"
          transform="translate(10 12)"
          fill="#F5222D"
        />
        <rect
          width="1"
          height="1"
          transform="translate(10 10)"
          fill="#F5222D"
        />
        <rect width="1" height="1" transform="translate(10 6)" fill="black" />
        <rect
          width="1"
          height="1"
          transform="translate(10 14)"
          fill="#820014"
        />
        <rect width="1" height="1" transform="translate(11 8)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(11 4)" fill="#B2B2B2" />
        <rect
          width="1"
          height="1"
          transform="translate(11 12)"
          fill="#FF4D4F"
        />
        <rect
          width="1"
          height="1"
          transform="translate(11 10)"
          fill="#F5222D"
        />
        <rect width="1" height="1" transform="translate(11 6)" fill="black" />
        <rect width="1" height="1" transform="translate(12 8)" fill="#CCCCCC" />
        <rect
          width="1"
          height="1"
          transform="translate(12 12)"
          fill="#FFD8BF"
        />
        <rect width="1" height="1" transform="translate(12 6)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(3 5)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(3 11)" fill="#5C0011" />
        <rect width="1" height="1" transform="translate(3 7)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(4 9)" fill="#5C0011" />
        <rect width="1" height="1" transform="translate(4 5)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(4 13)" fill="#5C0011" />
        <rect width="1" height="1" transform="translate(4 11)" fill="#820014" />
        <rect width="1" height="1" transform="translate(4 7)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(5 9)" fill="#F5222D" />
        <rect width="1" height="1" transform="translate(5 5)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(5 13)" fill="black" />
        <rect width="1" height="1" transform="translate(5 3)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(5 11)" fill="#FF4D4F" />
        <rect width="1" height="1" transform="translate(5 7)" fill="black" />
        <rect width="1" height="1" transform="translate(5 15)" fill="#08979C" />
        <rect width="1" height="1" transform="translate(6 9)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(6 5)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(6 13)" fill="#820014" />
        <rect width="1" height="1" transform="translate(6 3)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(6 11)" fill="#820014" />
        <rect width="1" height="1" transform="translate(6 7)" fill="black" />
        <rect width="1" height="1" transform="translate(6 15)" fill="#08979C" />
        <rect width="1" height="1" transform="translate(7 9)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(7 5)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(7 13)" fill="#820014" />
        <rect width="1" height="1" transform="translate(7 3)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(7 11)" fill="#F5222D" />
        <rect width="1" height="1" transform="translate(7 7)" fill="black" />
        <rect width="1" height="1" transform="translate(8 9)" fill="#FF9C6E" />
        <rect width="1" height="1" transform="translate(8 5)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(8 13)" fill="#820014" />
        <rect width="1" height="1" transform="translate(8 3)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(8 11)" fill="#F5222D" />
        <rect width="1" height="1" transform="translate(8 7)" fill="black" />
        <rect width="1" height="1" transform="translate(9 9)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(9 5)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(9 13)" fill="#820014" />
        <rect width="1" height="1" transform="translate(9 3)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(9 11)" fill="#F5222D" />
        <rect width="1" height="1" transform="translate(9 7)" fill="black" />
        <rect width="1" height="1" transform="translate(9 15)" fill="#08979C" />
        <rect width="1" height="1" transform="translate(10 9)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(10 5)" fill="#CCCCCC" />
        <rect
          width="1"
          height="1"
          transform="translate(10 13)"
          fill="#820014"
        />
        <rect width="1" height="1" transform="translate(10 3)" fill="#B2B2B2" />
        <rect
          width="1"
          height="1"
          transform="translate(10 11)"
          fill="#F5222D"
        />
        <rect width="1" height="1" transform="translate(10 7)" fill="black" />
        <rect
          width="1"
          height="1"
          transform="translate(10 15)"
          fill="#08979C"
        />
        <rect width="1" height="1" transform="translate(11 5)" fill="#CCCCCC" />
        <rect
          width="1"
          height="1"
          transform="translate(11 11)"
          fill="#FF4D4F"
        />
        <rect width="1" height="1" transform="translate(11 7)" fill="black" />
        <rect width="1" height="1" transform="translate(12 5)" fill="#CCCCCC" />
        <rect width="1" height="1" transform="translate(12 7)" fill="#CCCCCC" />
      </g>
      <defs>
        <clipPath id="clip0_9_36918">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  openai: () => (
    <svg
      width="80"
      height="80"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_9_37175)">
        <rect width="1" height="1" transform="translate(3 4)" fill="#FAAD14" />
        <rect width="1" height="1" transform="translate(3 12)" fill="#030852" />
        <rect width="1" height="1" transform="translate(3 10)" fill="#030852" />
        <rect width="1" height="1" transform="translate(3 6)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(4 8)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(4 4)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(4 12)" fill="#061178" />
        <rect width="1" height="1" transform="translate(4 10)" fill="#2F54EB" />
        <rect width="1" height="1" transform="translate(4 6)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(5 8)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(5 4)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(5 12)" fill="#597EF7" />
        <rect width="1" height="1" transform="translate(5 10)" fill="#061178" />
        <rect width="1" height="1" transform="translate(5 6)" fill="#780650" />
        <rect width="1" height="1" transform="translate(5 14)" fill="black" />
        <rect width="1" height="1" transform="translate(6 8)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(6 4)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(6 12)" fill="#597EF7" />
        <rect width="1" height="1" transform="translate(6 10)" fill="#2F54EB" />
        <rect width="1" height="1" transform="translate(6 6)" fill="#520339" />
        <rect width="1" height="1" transform="translate(6 14)" fill="#061178" />
        <rect width="1" height="1" transform="translate(7 8)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(7 4)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(7 12)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(7 10)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(7 6)" fill="#780650" />
        <rect width="1" height="1" transform="translate(8 8)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(8 4)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(8 12)" fill="#2F54EB" />
        <rect width="1" height="1" transform="translate(8 10)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(8 6)" fill="#780650" />
        <rect width="1" height="1" transform="translate(9 8)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(9 4)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(9 12)" fill="#2F54EB" />
        <rect width="1" height="1" transform="translate(9 10)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(9 6)" fill="#780650" />
        <rect width="1" height="1" transform="translate(9 14)" fill="#061178" />
        <rect width="1" height="1" transform="translate(10 8)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(10 4)" fill="#FFC53D" />
        <rect
          width="1"
          height="1"
          transform="translate(10 12)"
          fill="#2F54EB"
        />
        <rect
          width="1"
          height="1"
          transform="translate(10 10)"
          fill="#2F54EB"
        />
        <rect width="1" height="1" transform="translate(10 6)" fill="#520339" />
        <rect
          width="1"
          height="1"
          transform="translate(10 14)"
          fill="#061178"
        />
        <rect width="1" height="1" transform="translate(11 8)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(11 4)" fill="#FFC53D" />
        <rect
          width="1"
          height="1"
          transform="translate(11 12)"
          fill="#597EF7"
        />
        <rect
          width="1"
          height="1"
          transform="translate(11 10)"
          fill="#2F54EB"
        />
        <rect width="1" height="1" transform="translate(11 6)" fill="#780650" />
        <rect
          width="1"
          height="1"
          transform="translate(12 12)"
          fill="#FFD8BF"
        />
        <rect width="1" height="1" transform="translate(3 5)" fill="#3F6600" />
        <rect width="1" height="1" transform="translate(3 13)" fill="#E5E5E5" />
        <rect width="1" height="1" transform="translate(3 11)" fill="#120338" />
        <rect width="1" height="1" transform="translate(3 7)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(4 9)" fill="#030852" />
        <rect width="1" height="1" transform="translate(4 5)" fill="#3F6600" />
        <rect width="1" height="1" transform="translate(4 13)" fill="#030852" />
        <rect width="1" height="1" transform="translate(4 3)" fill="#FAAD14" />
        <rect width="1" height="1" transform="translate(4 11)" fill="#061178" />
        <rect width="1" height="1" transform="translate(4 7)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(5 9)" fill="#2F54EB" />
        <rect width="1" height="1" transform="translate(5 5)" fill="#3F6600" />
        <rect width="1" height="1" transform="translate(5 13)" fill="black" />
        <rect width="1" height="1" transform="translate(5 3)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(5 11)" fill="#597EF7" />
        <rect width="1" height="1" transform="translate(5 7)" fill="#780650" />
        <rect width="1" height="1" transform="translate(5 15)" fill="#10239E" />
        <rect width="1" height="1" transform="translate(6 9)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(6 5)" fill="#7CB305" />
        <rect width="1" height="1" transform="translate(6 13)" fill="#061178" />
        <rect width="1" height="1" transform="translate(6 3)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(6 11)" fill="#22075E" />
        <rect width="1" height="1" transform="translate(6 7)" fill="#520339" />
        <rect width="1" height="1" transform="translate(6 15)" fill="#10239E" />
        <rect width="1" height="1" transform="translate(7 9)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(7 5)" fill="#7CB305" />
        <rect width="1" height="1" transform="translate(7 13)" fill="#061178" />
        <rect width="1" height="1" transform="translate(7 3)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(7 11)" fill="#2F54EB" />
        <rect width="1" height="1" transform="translate(7 7)" fill="#780650" />
        <rect width="1" height="1" transform="translate(8 9)" fill="#FFBB96" />
        <rect width="1" height="1" transform="translate(8 5)" fill="#7CB305" />
        <rect width="1" height="1" transform="translate(8 13)" fill="#061178" />
        <rect width="1" height="1" transform="translate(8 3)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(8 11)" fill="#2F54EB" />
        <rect width="1" height="1" transform="translate(8 7)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(9 9)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(9 5)" fill="#7CB305" />
        <rect width="1" height="1" transform="translate(9 13)" fill="#061178" />
        <rect width="1" height="1" transform="translate(9 3)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(9 11)" fill="#2F54EB" />
        <rect width="1" height="1" transform="translate(9 7)" fill="#780650" />
        <rect width="1" height="1" transform="translate(9 15)" fill="#10239E" />
        <rect width="1" height="1" transform="translate(10 9)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(10 5)" fill="#7CB305" />
        <rect
          width="1"
          height="1"
          transform="translate(10 13)"
          fill="#061178"
        />
        <rect width="1" height="1" transform="translate(10 3)" fill="#FFD666" />
        <rect
          width="1"
          height="1"
          transform="translate(10 11)"
          fill="#2F54EB"
        />
        <rect width="1" height="1" transform="translate(10 7)" fill="#520339" />
        <rect
          width="1"
          height="1"
          transform="translate(10 15)"
          fill="#10239E"
        />
        <rect width="1" height="1" transform="translate(11 5)" fill="#7CB305" />
        <rect
          width="1"
          height="1"
          transform="translate(11 11)"
          fill="#597EF7"
        />
        <rect width="1" height="1" transform="translate(11 7)" fill="#780650" />
      </g>
      <defs>
        <clipPath id="clip0_9_37175">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  googleDrive: () => (
    <svg
      width="90"
      height="90"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_9_37175)">
        <rect width="1" height="1" transform="translate(3 4)" fill="#FAAD14" />
        <rect width="1" height="1" transform="translate(3 12)" fill="#030852" />
        <rect width="1" height="1" transform="translate(3 10)" fill="#030852" />
        <rect width="1" height="1" transform="translate(3 6)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(4 8)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(4 4)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(4 12)" fill="#061178" />
        <rect width="1" height="1" transform="translate(4 10)" fill="#2F54EB" />
        <rect width="1" height="1" transform="translate(4 6)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(5 8)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(5 4)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(5 12)" fill="#597EF7" />
        <rect width="1" height="1" transform="translate(5 10)" fill="#061178" />
        <rect width="1" height="1" transform="translate(5 6)" fill="#780650" />
        <rect width="1" height="1" transform="translate(5 14)" fill="black" />
        <rect width="1" height="1" transform="translate(6 8)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(6 4)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(6 12)" fill="#597EF7" />
        <rect width="1" height="1" transform="translate(6 10)" fill="#2F54EB" />
        <rect width="1" height="1" transform="translate(6 6)" fill="#520339" />
        <rect width="1" height="1" transform="translate(6 14)" fill="#061178" />
        <rect width="1" height="1" transform="translate(7 8)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(7 4)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(7 12)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(7 10)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(7 6)" fill="#780650" />
        <rect width="1" height="1" transform="translate(8 8)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(8 4)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(8 12)" fill="#2F54EB" />
        <rect width="1" height="1" transform="translate(8 10)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(8 6)" fill="#780650" />
        <rect width="1" height="1" transform="translate(9 8)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(9 4)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(9 12)" fill="#2F54EB" />
        <rect width="1" height="1" transform="translate(9 10)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(9 6)" fill="#780650" />
        <rect width="1" height="1" transform="translate(9 14)" fill="#061178" />
        <rect width="1" height="1" transform="translate(10 8)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(10 4)" fill="#FFC53D" />
        <rect
          width="1"
          height="1"
          transform="translate(10 12)"
          fill="#2F54EB"
        />
        <rect
          width="1"
          height="1"
          transform="translate(10 10)"
          fill="#2F54EB"
        />
        <rect width="1" height="1" transform="translate(10 6)" fill="#520339" />
        <rect
          width="1"
          height="1"
          transform="translate(10 14)"
          fill="#061178"
        />
        <rect width="1" height="1" transform="translate(11 8)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(11 4)" fill="#FFC53D" />
        <rect
          width="1"
          height="1"
          transform="translate(11 12)"
          fill="#597EF7"
        />
        <rect
          width="1"
          height="1"
          transform="translate(11 10)"
          fill="#2F54EB"
        />
        <rect width="1" height="1" transform="translate(11 6)" fill="#780650" />
        <rect
          width="1"
          height="1"
          transform="translate(12 12)"
          fill="#FFD8BF"
        />
        <rect width="1" height="1" transform="translate(3 5)" fill="#3F6600" />
        <rect width="1" height="1" transform="translate(3 13)" fill="#E5E5E5" />
        <rect width="1" height="1" transform="translate(3 11)" fill="#120338" />
        <rect width="1" height="1" transform="translate(3 7)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(4 9)" fill="#030852" />
        <rect width="1" height="1" transform="translate(4 5)" fill="#3F6600" />
        <rect width="1" height="1" transform="translate(4 13)" fill="#030852" />
        <rect width="1" height="1" transform="translate(4 3)" fill="#FAAD14" />
        <rect width="1" height="1" transform="translate(4 11)" fill="#061178" />
        <rect width="1" height="1" transform="translate(4 7)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(5 9)" fill="#2F54EB" />
        <rect width="1" height="1" transform="translate(5 5)" fill="#3F6600" />
        <rect width="1" height="1" transform="translate(5 13)" fill="black" />
        <rect width="1" height="1" transform="translate(5 3)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(5 11)" fill="#597EF7" />
        <rect width="1" height="1" transform="translate(5 7)" fill="#780650" />
        <rect width="1" height="1" transform="translate(5 15)" fill="#10239E" />
        <rect width="1" height="1" transform="translate(6 9)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(6 5)" fill="#7CB305" />
        <rect width="1" height="1" transform="translate(6 13)" fill="#061178" />
        <rect width="1" height="1" transform="translate(6 3)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(6 11)" fill="#22075E" />
        <rect width="1" height="1" transform="translate(6 7)" fill="#520339" />
        <rect width="1" height="1" transform="translate(6 15)" fill="#10239E" />
        <rect width="1" height="1" transform="translate(7 9)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(7 5)" fill="#7CB305" />
        <rect width="1" height="1" transform="translate(7 13)" fill="#061178" />
        <rect width="1" height="1" transform="translate(7 3)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(7 11)" fill="#2F54EB" />
        <rect width="1" height="1" transform="translate(7 7)" fill="#780650" />
        <rect width="1" height="1" transform="translate(8 9)" fill="#FFBB96" />
        <rect width="1" height="1" transform="translate(8 5)" fill="#7CB305" />
        <rect width="1" height="1" transform="translate(8 13)" fill="#061178" />
        <rect width="1" height="1" transform="translate(8 3)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(8 11)" fill="#2F54EB" />
        <rect width="1" height="1" transform="translate(8 7)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(9 9)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(9 5)" fill="#7CB305" />
        <rect width="1" height="1" transform="translate(9 13)" fill="#061178" />
        <rect width="1" height="1" transform="translate(9 3)" fill="#FFC53D" />
        <rect width="1" height="1" transform="translate(9 11)" fill="#2F54EB" />
        <rect width="1" height="1" transform="translate(9 7)" fill="#780650" />
        <rect width="1" height="1" transform="translate(9 15)" fill="#10239E" />
        <rect width="1" height="1" transform="translate(10 9)" fill="#FFD8BF" />
        <rect width="1" height="1" transform="translate(10 5)" fill="#7CB305" />
        <rect
          width="1"
          height="1"
          transform="translate(10 13)"
          fill="#061178"
        />
        <rect width="1" height="1" transform="translate(10 3)" fill="#FFD666" />
        <rect
          width="1"
          height="1"
          transform="translate(10 11)"
          fill="#2F54EB"
        />
        <rect width="1" height="1" transform="translate(10 7)" fill="#520339" />
        <rect
          width="1"
          height="1"
          transform="translate(10 15)"
          fill="#10239E"
        />
        <rect width="1" height="1" transform="translate(11 5)" fill="#7CB305" />
        <rect
          width="1"
          height="1"
          transform="translate(11 11)"
          fill="#597EF7"
        />
        <rect width="1" height="1" transform="translate(11 7)" fill="#780650" />
      </g>
      <defs>
        <clipPath id="clip0_9_37175">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  whatsapp: () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_11_37689)">
        <rect width="1" height="1" transform="translate(3 4)" fill="#613400" />
        <rect width="1" height="1" transform="translate(3 12)" fill="#002329" />
        <rect width="1" height="1" transform="translate(3 10)" fill="#002329" />
        <rect width="1" height="1" transform="translate(3 6)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(4 8)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(4 4)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(4 12)" fill="#00474F" />
        <rect width="1" height="1" transform="translate(4 10)" fill="#13C2C2" />
        <rect width="1" height="1" transform="translate(4 6)" fill="#613400" />
        <rect width="1" height="1" transform="translate(5 8)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(5 4)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(5 12)" fill="#36CFC9" />
        <rect width="1" height="1" transform="translate(5 10)" fill="#00474F" />
        <rect width="1" height="1" transform="translate(5 6)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(5 14)" fill="black" />
        <rect width="1" height="1" transform="translate(6 8)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(6 4)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(6 12)" fill="#36CFC9" />
        <rect width="1" height="1" transform="translate(6 10)" fill="#13C2C2" />
        <rect width="1" height="1" transform="translate(6 6)" fill="black" />
        <rect width="1" height="1" transform="translate(6 14)" fill="#00474F" />
        <rect width="1" height="1" transform="translate(7 8)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(7 4)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(7 12)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(7 10)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(7 6)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(8 8)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(8 4)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(8 12)" fill="#13C2C2" />
        <rect width="1" height="1" transform="translate(8 10)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(8 6)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(9 8)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(9 4)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(9 12)" fill="#13C2C2" />
        <rect width="1" height="1" transform="translate(9 10)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(9 6)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(9 14)" fill="#00474F" />
        <rect width="1" height="1" transform="translate(10 8)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(10 4)" fill="#874D00" />
        <rect
          width="1"
          height="1"
          transform="translate(10 12)"
          fill="#13C2C2"
        />
        <rect
          width="1"
          height="1"
          transform="translate(10 10)"
          fill="#13C2C2"
        />
        <rect width="1" height="1" transform="translate(10 6)" fill="black" />
        <rect
          width="1"
          height="1"
          transform="translate(10 14)"
          fill="#00474F"
        />
        <rect width="1" height="1" transform="translate(11 8)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(11 4)" fill="#613400" />
        <rect
          width="1"
          height="1"
          transform="translate(11 12)"
          fill="#36CFC9"
        />
        <rect
          width="1"
          height="1"
          transform="translate(11 10)"
          fill="#13C2C2"
        />
        <rect width="1" height="1" transform="translate(11 6)" fill="#874D00" />
        <rect
          width="1"
          height="1"
          transform="translate(12 12)"
          fill="#874D00"
        />
        <rect width="1" height="1" transform="translate(3 5)" fill="#613400" />
        <rect width="1" height="1" transform="translate(3 11)" fill="#002329" />
        <rect width="1" height="1" transform="translate(3 7)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(4 9)" fill="#002329" />
        <rect width="1" height="1" transform="translate(4 5)" fill="#613400" />
        <rect width="1" height="1" transform="translate(4 13)" fill="#002329" />
        <rect width="1" height="1" transform="translate(4 3)" fill="#613400" />
        <rect width="1" height="1" transform="translate(4 11)" fill="#00474F" />
        <rect width="1" height="1" transform="translate(4 7)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(5 9)" fill="#13C2C2" />
        <rect width="1" height="1" transform="translate(5 5)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(5 13)" fill="black" />
        <rect width="1" height="1" transform="translate(5 3)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(5 11)" fill="#36CFC9" />
        <rect width="1" height="1" transform="translate(5 7)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(5 15)" fill="#9E1068" />
        <rect width="1" height="1" transform="translate(6 9)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(6 5)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(6 13)" fill="#00474F" />
        <rect width="1" height="1" transform="translate(6 3)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(6 11)" fill="#00474F" />
        <rect width="1" height="1" transform="translate(6 7)" fill="black" />
        <rect width="1" height="1" transform="translate(6 15)" fill="#9E1068" />
        <rect width="1" height="1" transform="translate(7 9)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(7 5)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(7 13)" fill="#00474F" />
        <rect width="1" height="1" transform="translate(7 3)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(7 11)" fill="#13C2C2" />
        <rect width="1" height="1" transform="translate(7 7)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(8 9)" fill="#FFBB96" />
        <rect width="1" height="1" transform="translate(8 5)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(8 13)" fill="#00474F" />
        <rect width="1" height="1" transform="translate(8 3)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(8 11)" fill="#13C2C2" />
        <rect width="1" height="1" transform="translate(8 7)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(9 9)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(9 5)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(9 13)" fill="#00474F" />
        <rect width="1" height="1" transform="translate(9 3)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(9 11)" fill="#13C2C2" />
        <rect width="1" height="1" transform="translate(9 7)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(9 15)" fill="#9E1068" />
        <rect width="1" height="1" transform="translate(10 9)" fill="#874D00" />
        <rect width="1" height="1" transform="translate(10 5)" fill="#874D00" />
        <rect
          width="1"
          height="1"
          transform="translate(10 13)"
          fill="#00474F"
        />
        <rect width="1" height="1" transform="translate(10 3)" fill="#874D00" />
        <rect
          width="1"
          height="1"
          transform="translate(10 11)"
          fill="#13C2C2"
        />
        <rect width="1" height="1" transform="translate(10 7)" fill="black" />
        <rect
          width="1"
          height="1"
          transform="translate(10 15)"
          fill="#9E1068"
        />
        <rect width="1" height="1" transform="translate(11 5)" fill="#874D00" />
        <rect
          width="1"
          height="1"
          transform="translate(11 11)"
          fill="#36CFC9"
        />
        <rect width="1" height="1" transform="translate(11 7)" fill="#874D00" />
      </g>
      <defs>
        <clipPath id="clip0_11_37689">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
};
