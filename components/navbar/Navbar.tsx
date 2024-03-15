import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <div className="px-8 bg-[#1e1e1e60] backdrop-blur-lg items-center fixed  text-white  flex w-screen justify-between h-[80px]  ">
      <Image alt="logo" src={"/wartex-logo.webp"} height={60} width={60} />

      <div className=" gap-x-5 flex items-center  h-full">
        <Link href={"/Legacy"} className="px-4 font-bold ">
          Legacy
        </Link>
        <Link href={"/Team"} className="px-4 font-bold ">
          Team
        </Link>
        <Link href={"/Events"} className="px-4 font-bold ">
          Events
        </Link>
        <Link href={"/Contact"} className="px-4 font-bold ">
          Contact
        </Link>
        <Link href={"/abc"}>
          <Button className="font-bold text-md px-8 py-6">Register</Button>
        </Link>
      </div>
    </div>
  );
};
