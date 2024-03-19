import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="h-screen w-screen mt-16  ">
      <div className=" text-center mb-[3vh]">
        <h1 className="text-white text-3xl  ">About Us</h1>
      </div>
      <div className="flex flex-col md:flex-row  ml-[2vh] mr-[2vh] lg:ml-[5vh] ">
        <div className="md:w-[90vh] mt-[3vh]">
          <Image
            src="/placeholderAbout.png"
            alt="placeholder"
            height={600}
            width={700}
          />
        </div>
        <div className="text-left mt-[3vh] text-white md:max-w-[60vh] md:ml-[2vh] lg:max-w-2xl lg:ml-[5vh] ">
          <div className="text-3xl mb-[2vh]  ">
            THE MOST ANTICIPATED EVENT IN DELHI
          </div>
          It is a technology-based event held on the school premises for
          students of classes 6-12 that brings together technology enthusiasts
          and professionals to showcase the latest advancements in various
          fields such as AI, robotics, cybersecurity, and more to showcase their
          innovation and problem-solving skills through various tech-related
          tasks. The event comprises various competitions ranging from cryptic
          hunt to web development to coding (python, C++) rap battle, group
          discussion events on tech-related topics, and many more.
        </div>
      </div>
    </div>
  );
};

export default About;
