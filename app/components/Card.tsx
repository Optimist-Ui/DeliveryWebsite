import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
type prop = {
  name: string;

  path: string;
};

const Card = ({ name, path }: prop) => {
  return (
    <>
      <div className="text-lg flex justify-center items-center text-center flex-col  pt-8 pb-16 px-24 rounded-lg bg-[#efefef] shadow-2xl">
        <Image
          src={`/assets/images/${path}`}
          alt="Profile Pic"
          width={150}
          height={80}
          style={{ height: "auto", width: "auto" }}
          className="rounded-md shadow-xl mt-4"
        />
        <h1 className="font-bold mt-6 text-2xl">{name}</h1>
        <h3 className="text-[#333] mb-6 text-base">Courier</h3>
        <div className="flex items-center justify-center gap-2">
          <Link href={"#"}>
            <FaFacebookF
              size={30}
              className="bg-[#73a241] text-white p-2 rounded-full transition-transform duration-700 hover:scale-125 hover:rotate-[-360deg]"
            />
          </Link>
          <Link href={"#"}>
            <FaTwitter
              size={30}
              className="bg-[#73a241] text-white p-2 rounded-full transition-transform duration-700 hover:scale-125 hover:rotate-[-360deg]"
            />
          </Link>
          <Link href={"#"}>
            <FaYoutube
              size={30}
              className="bg-[#73a241] text-white p-2 rounded-full transition-transform duration-700 hover:scale-125 hover:rotate-[-360deg]"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
