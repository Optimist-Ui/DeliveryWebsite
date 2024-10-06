"use client";
import Image from "next/image";
const Button = dynamic(() => import("../components/Button"), { ssr: false });
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean | null>(false);
  const [message, setMessage] = useState<string>("");

  const handleSubBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = document.getElementById("newsletterform") as HTMLFormElement;
    form?.requestSubmit();
  };

  const handleFormSub = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    setMessage(`Subscribed Successfully !`);
    setEmail("");

    return;
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSubmitted(false);
    }, 1800);
  }, [isSubmitted]);

  const handleMailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target;
    setEmail(value.value);
  };
  return (
    <div className="flex justify-center items-center text-start my-32 gap-32 flex-wrap">
      <div className="text-lg">
        <h1 className="font-bold text-5xl my-5">Join Our Newsletter</h1>
        <p className="tracking-tight text-lg text-wrap max-w-[50rem] my-12 mb-16">
          Lorem ipsum, dolor sit amet g elitsadaa olsa estias magnam. Molestias
          sunt <br />
          ea vel distinctio libero necessitatibus ndis ipsam. Molestias sunt ea
          vel distinctio
          <br />
          libe.ea vel distinctio libe.
        </p>
        <form id="newsletterform" onSubmit={handleFormSub}>
          {isSubmitted && (
            <span className="text-green-700 font-medium bg-gray-200 py-4 px-32 text-center rounded-md absolute transform translate-y-[-4rem]">
              {message}
            </span>
          )}
          <div className="flex items-center justify-center text-center mt-6">
            <input
              type="email"
              required
              value={email}
              onChange={handleMailInput}
              placeholder="Email Address"
              className="py-3 px-4 rounded-md outline-none mr-2 border-2 text-lg font-semibold w-full ml-2 text-[#333] hover:scale-[1.02] transition-all focus:border-blue-500"
            />
            <Button value="Subscribe" type="submit" click={handleSubBtn} />
          </div>
        </form>
      </div>
      <div className="">
        <Image
          src={"/assets/images/NewsletterCar.png"}
          alt="Not Available"
          width={400}
          height={400}
          style={{ height: "auto", width: "auto" }}
        />
      </div>
    </div>
  );
};

export default NewsLetter;
