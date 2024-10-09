"use client";
import { useRouter } from "next/navigation";
const Button = dynamic(() => import("../components/Button"), { ssr: false });
import dynamic from "next/dynamic";
import Delivery from "../components/Delivery";
import Footer from "../components/Footer";
import NavbarC from "../components/NavbarC";
import { FaCheck } from "react-icons/fa";

const page = () => {
  const router = useRouter();
  return (
    <div className="overflow-x-hidden relative">
      <NavbarC heading="Pricing" page="pricing" />
      <div className="text-center text-lg md:my-24 ">
        <h1 className="text-5xl font-bold my-6">What We Offer</h1>
        <p className="text-base tracking-tighter">
          Lorem, ipsum dolor sit amet consectetur adipisicing
          elit.consecteturconsectetur adipisicing elit.
          <br />
          Exercitationem, expedita! L! Lorem ipsum.
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 mx-auto mt-24 text-nowrap max-w-[78%] my-2 sm:max-w-[50%] md:max-w-[70%] items-center text-center gap-2">
          <div className="bg-[#73A241] text-white flex flex-col items-center justify-center max-w-fit gap-6 lg:gap-4 py-16 px-24  rounded-xl ">
            <h1 className="lg:text-3xl text-xl font-semibold text-nowrap">
              Same Day
            </h1>

            <h1 className="text-2xl lg:text-5xl font-bold text-start">
              $10/<span className="font-medium text-xl">delivery</span>
            </h1>
            <ul className="text-start list-disc marker:text-gray-500 text-sm lg:text-[1.1rem] tracking-tighter">
              <li className="my-1 lg:my-0">
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                Item Tracking
              </li>
              <li className="my-1 lg:my-0">
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                30 Minutes Pick Up
              </li>
              <li className="my-1 lg:my-0">
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                App Promo
              </li>
              <li className="my-1 lg:my-0">
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
          <div className="bg-[#73A241] text-white  flex flex-col items-center justify-center max-w-fit gap-6 lg:gap-4 py-16 px-24 rounded-xl ">
            <h1 className="lg:text-3xl text-xl font-semibold">Regular</h1>

            <h1 className="text-2xl lg:text-5xl font-bold text-start">
              $6.5/<span className="font-medium text-xl">delivery</span>
            </h1>
            <ul className="text-start list-disc marker:text-gray-500 text-sm lg:text-[1.1rem] tracking-tighter">
              <li className="my-1 lg:my-0">
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                Item Tracking
              </li>
              <li>
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                30 Minutes Pick Up
              </li>
              <li className="my-1 lg:my-0">
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                App Promo
              </li>
              <li className="my-1 lg:my-0">
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
          <div className="bg-[#73A241] text-white  flex flex-col items-center justify-center max-w-fit gap-6 lg:gap-4 py-16 px-24 rounded-xl ">
            <h1 className="lg:text-3xl text-xl font-semibold">Cargo</h1>

            <h1 className="text-2xl lg:text-5xl font-bold text-start">
              $10/<span className="font-medium text-xl">delivery</span>
            </h1>
            <ul className="text-start list-disc marker:text-gray-500 text-sm lg:text-[1.1rem] tracking-tighter">
              <li className="my-1 lg:my-0">
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                Item Tracking
              </li>
              <li className="my-1 lg:my-0">
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                30 Minutes Pick Up
              </li>
              <li className="my-1 lg:my-0">
                <FaCheck className="inline-block text-[#f39f39] transform translate-y-[-2px] mr-1" />
                App Promo
              </li>
              <li className="my-1 lg:my-0">
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

      <Delivery />

      <Footer />
    </div>
  );
};

export default page;
