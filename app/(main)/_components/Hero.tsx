import React from "react";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const Mont = Montserrat({
  weight: "500",
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <>
      <div className="overflow-hidden bg-gradient-to-t from-[#1e1e1e] to-transparent from-[10%] to-[80%] h-screen  flex text-white items-end ">
        <div className="text-lg absolute inset-0 -z-10 h-full w-full bg-[#1e1e1e] bg-[linear-gradient(to_right,#b83eff20_2px,transparent_2px),linear-gradient(to_bottom,#b83eff20_2px,transparent_2px)] bg-[size:30px_30px]"></div>
        <div
          className={cn(
            "leading-[7.8vh] hidden md:block  w-full text-9xl lg:text-[300px] tracking-wide translate-y-4 px-4 text-[#b83eff] eger absolute"
          )}
        >
          WARTEX #10.0
        </div>{" "}
        <div
          className={cn(
            "w-[900px] hidden md:flex text-[#ff92fb]  text-2xl mx-4 mb-4  justify-between",
            Mont.className
          )}
        >
          <div>S.R.D.A.V Public School, Dayanand Vihar</div>
          <div className="tracking-[2px]">XX/XX/24</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
