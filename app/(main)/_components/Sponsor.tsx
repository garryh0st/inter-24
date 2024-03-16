import React from "react";
import Image from "next/image";

const Sponsor = () => {
  return (
    <>
      {/* <div className="w-screen h-screen mt-[20vh]">
        <div className="text-white font-eger tracking-wide text-center text-6xl">
          SPONSORS 
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-9 h-[10vh]">
          <div className="bg-slate-50 height-[40vh] w-[30vh] rounded-md justify-center">1</div>
          <div className="bg-slate-50 height-[40vh] w-[30vh] rounded-md justify-center ">
             2</div>
        </div>
      </div> */}

    
        <section className="relative pt-28 overflow-hidden dark:bg-[#ebe2e2]">
          <div className="relative z-10 container px-4 mx-auto">
            <h1 className="mb-14   text-[#ffffff] text-center  font-eger uppercase tracking-wide  text-6xl">
              THE daddys
            </h1>
            {/* <p
              className="mb-14 text-sm text-white text-center font-semibold uppercase tracking-px dark:text-black"
            >
              THE OFFICAL SPONSORS
            </p> */}
            <div className="flex flex-wrap max-w-5xl mx-auto justify-center -m-3">
              <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                <div className="flex items-center justify-center py-8 px-9 h-full bg-[#ffffff24] dark:bg-[#000]  rounded-3xl">
                  <Image src="" alt="" />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                <div className="flex items-center justify-center py-8 px-9 h-full bg-[#ffffff24] dark:bg-[#000] rounded-3xl">
                  <Image src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
 
    </>
  );
};

export default Sponsor;
