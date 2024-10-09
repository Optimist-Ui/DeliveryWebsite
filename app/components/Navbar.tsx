"use client";
import Image from "next/image";
const Button = dynamic(() => import("../components/Button"), { ssr: false });
import dynamic from "next/dynamic";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [input, setInput] = useState<string>("");
  const [valid, setValid] = useState<boolean | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // alert("Address Not Found !");
    if (input.trim() === "") {
      setValid(false);
    } else {
      setValid(true);
    }
    setInput("");
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setInput(target.value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setValid(null); // Reset valid state to null after 2 seconds
    }, 1800);

    return () => clearTimeout(timer); // Cleanup timer if component unmounts or changes
  }, [valid]);
  return (
    <div className="relative bg-[#3A454B] py-2 px-2  md:px-8">
      <div className="absolute inset-0 bg-[url('/assets/images/NavbarBackround.png')] bg-cover bg-center bg-no-repeat opacity-10"></div>

      {/* Call the NavLinks component */}
      <NavLinks />

      {/* Main Content */}
      <div className="flex my-32 justify-center items-center w-fit mx-auto flex-wrap-reverse text-white gap-24 relative z-10">
        <div className="text-lg sm:text-start text-center">
          <h1 className="font-bold text-5xl  sm:mx-2 mx-6 my-5">
            Reliable Service <br /> Every Time
          </h1>
          <p className="tracking-tight sm:text-lg text-base md:mx-2 mx-6 text-wrap max-w-[30rem] my-8">
            Lorem ipsum, dolor sit amet g elitsadaa olsa estias magnam.
            Molestias sunt ea vel distinctio libero necessitatibus ndis ipsam.
            Molestias sunt ea vel distinctio libe.
          </p>
          <form>
            {valid && (
              <span className="text-white bg-[#253138] font-medium py-4 px-24 ml-4 text-center rounded-sm">
                Address Not Found !
              </span>
            )}
            {valid === false && (
              <span className="text-white bg-[#253138] font-medium py-4 px-24 ml-4 text-center rounded-sm">
                Enter Address &#128545;
              </span>
            )}
            <div className="flex items-center justify-center text-center my-8">
              <input
                type="text"
                value={input}
                onChange={inputHandler}
                placeholder="Enter Delivery Address"
                className="px-4 py-3 rounded-md outline-none mr-2 border-2 text-sm sm:text-base md:text-lg font-semibold w-[78%] ml-2 text-[#333] hover:scale-[1.02] transition-all focus:border-blue-500"
              />
              <Button value="Go" type="submit" click={handleClick} />
            </div>
          </form>
        </div>
        <div className="ml-5 z-5 relative ">
          <Image
            src={"/assets/images/door.png"}
            alt="Not Available"
            width={400}
            height={200}
            priority
            style={{ height: "auto", width: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
