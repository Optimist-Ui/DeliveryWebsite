"use client";
import Image from "next/image";
const Button = dynamic(() => import("../components/Button"), { ssr: false });
import Footer from "../components/Footer";
import NavbarC from "../components/NavbarC";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/MapWithZoom"), {
  ssr: false,
});

const page = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Check Your Email !");
  };
  return (
    <div className="overflow-x-hidden">
      <NavbarC heading="Contact US" page="contact" />

      {/* Newsletter section */}
      <div className="flex justify-center items-end text-start align-baseline my-32 gap-28 mb-60">
        <div className="text-lg">
          <h1 className="font-bold text-5xl my-5">Join Our Newsletter</h1>
          <p className="tracking-tight text-lg text-wrap max-w-[50rem] my-12 mb-6">
            Lorem ipsum, dolor sit amet g tias magnam. Molestias sunt ea vel
            distinctio libe.
            <br />
            ea vel distinctio libe. libe. libe.
          </p>
          <form>
            <div className="flex items-center flex-col justify-center text-center ">
              <input
                type="text"
                placeholder="Name"
                className="py-3 px-4  rounded-md outline-none my-2 border-2 text-lg font-semibold w-full  text-[#333] hover:scale-[1.02] transition-all focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Email Address"
                className="py-3 px-4 rounded-md outline-none my-2 border-2 text-lg font-semibold w-full  text-[#333] hover:scale-[1.02] transition-all focus:border-blue-500"
              />
              <textarea
                placeholder="Comment"
                className="py-3 px-4 h-[10rem] rounded-md outline-none my-2 border-2 text-lg font-semibold w-full  text-[#333] hover:scale-[1.02] transition-all focus:border-blue-500"
              />
              <div className="w-full bg-[#f3a13f] rounded-md hover:scale-105 transition-transform duration-300">
                <Button value="Send Now" type="submit" click={handleClick} />
              </div>
            </div>
          </form>
        </div>
        <div>
          <Image
            src="/assets/images/Contactimage.png"
            alt="Not Available"
            width={420}
            height={200}
            style={{ height: "auto", width: "auto" }}
          />
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-[#253138] rounded-t-[50%] py-12 pb-24 mx-[-10rem] ">
        <div className="flex justify-center text-white items-center text-start gap-12 relative">
          <div className="relative mt-[-6.5%]">
            <FaPhone className="mx-[5%] mb-[-10%] bg-[#73a241] scale-x-[-1] p-4 text-7xl rounded-md relative" />
            <div className="bg-[#062233] py-8 px-8 pr-48 rounded-lg ">
              <h1 className="font-bold text-2xl my-4">Our Phone</h1>
              <p className="pb-8">+1 234 567 890</p>
            </div>
          </div>
          <div className="relative mt-[-6.5%]">
            <FaEnvelope className="mx-[5%] mb-[-10%] bg-[#73a241] scale-x-[-1] p-4 text-7xl rounded-md relative" />
            <div className="bg-[#062233] py-8 px-8 pr-48 rounded-lg ">
              <h1 className="font-bold text-2xl my-4">Our Mail</h1>
              <p className="pb-8">example@mail.com</p>
            </div>
          </div>
          <div className="relative mt-[-6.5%]">
            <FaMapMarkerAlt className="mx-[5%] mb-[-10%] bg-[#73a241] scale-x-[-1] p-4 text-7xl rounded-md relative" />
            <div className="bg-[#062233] py-8 px-8 pr-44 rounded-lg ">
              <h1 className="font-bold text-2xl my-4">Our Address</h1>
              <p className="pb-8">234 Wood St, Atlanta</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Component placed before Footer */}
      <div className="w-full h-[500px]">
        <Map center={[30.3753, 69.3451]} zoom={5} />
      </div>
      <Footer />
    </div>
  );
};

export default page;
