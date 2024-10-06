"use client";
import { useRouter } from "next/navigation";
const Button = dynamic(() => import("../components/Button"), { ssr: false });
import dynamic from "next/dynamic";
import Delivery from "../components/Delivery";
import Footer from "../components/Footer";
import NavbarC from "../components/NavbarC";
import NewsLetter from "../components/NewsLetter";
import { FaCheck } from "react-icons/fa";

const page = () => {
  const router = useRouter();
  return (
    <div className="overflow-x-hidden">
      <NavbarC heading="Pricing" page="pricing" />
      <div className="text-center text-lg bg-white rounded-b-[50%] mx-[-8rem] mb-[-10rem]  pb-60 pt-24 relative">
        <h1 className="text-4xl font-bold my-6">What We Offer</h1>
        <p className="text-base tracking-tighter">
          Lorem, ipsum dolor sit amet consectetur adipisicing
          elit.consecteturconsectetur adipisicing elit.
          <br />
          Exercitationem, expedita! L! Lorem ipsum.
        </p>
        <div className="flex justify-center items-center text-center gap-8 relative mt-24 mb-[-27rem]">
          <div className="bg-[#73A241] text-white  flex flex-col items-center justify-center gap-4 py-16 px-24 rounded-xl ">
            <h1 className="text-3xl font-semibold">Same Day</h1>

            <h1 className="text-5xl font-bold text-start">
              $10/<span className="font-medium text-xl">delivery</span>
            </h1>
            <ul className="text-start list-disc marker:text-gray-500 text-[1.1rem] tracking-tighter">
              <li className="">
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                Item Tracking
              </li>
              <li>
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                30 Minutes Pick Up
              </li>
              <li>
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                App Promo
              </li>
              <li>
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                Fresh Gurantee
              </li>
            </ul>
            <Button
              value="Learn More"
              type="button"
              click={() => {
                router.replace("/faq");
              }}
            />
          </div>
          <div className="bg-[#73A241] text-white  flex flex-col items-center justify-center gap-4 py-16 px-24 rounded-xl ">
            <h1 className="text-3xl font-semibold">Regular</h1>

            <h1 className="text-5xl font-bold text-start">
              $6.5/<span className="font-medium text-xl">delivery</span>
            </h1>
            <ul className="text-start list-disc marker:text-gray-500 text-[1.1rem] tracking-tighter">
              <li className="">
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                Item Tracking
              </li>
              <li>
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                30 Minutes Pick Up
              </li>
              <li>
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                App Promo
              </li>
              <li>
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                Fresh Gurantee
              </li>
            </ul>
            <Button
              value="Learn More"
              type="button"
              click={() => {
                router.replace("/faq");
              }}
            />
          </div>
          <div className="bg-[#73A241] text-white  flex flex-col items-center justify-center gap-4 py-16 px-24 rounded-xl ">
            <h1 className="text-3xl font-semibold">Cargo</h1>

            <h1 className="text-5xl font-bold text-start">
              $10/<span className="font-medium text-xl">delivery</span>
            </h1>
            <ul className="text-start list-disc marker:text-gray-500 text-[1.1rem] tracking-tighter">
              <li>
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                Item Tracking
              </li>
              <li>
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                30 Minutes Pick Up
              </li>
              <li>
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                App Promo
              </li>
              <li>
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                Fresh Gurantee
              </li>
            </ul>
            <Button
              value="Learn More"
              type="button"
              click={() => {
                router.replace("/faq");
              }}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#253138] pt-96">
        <Delivery />
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default page;
