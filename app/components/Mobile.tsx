import Image from "next/image";
import { FaDollarSign, FaShieldAlt, FaTruck } from "react-icons/fa";

const Mobile = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-center items-center text-start text-2xl mt-24">
      <div className="mx-6 lg:text-start text-center">
        <h1 className="font-bold text-4xl my-8 text-[#3a3a3a]">
          Order From Our Apps And Get <br /> Special Offer
        </h1>
        <p className="text-[#3a3a3a] lg:text-lg md:text-base text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus
          dolor <br />
          labore reiciendis vitae quaerat laborum culpa velit, dolorum porro
          <br />
          numquam ratione, accusamus dignissimos! Cumque.
        </p>
        <div className="md:text-center text-start flex justify-center flex-col items-center md:items-start my-6 gap-2 md:gap-6">
          <div className="flex items-center justify-start gap-2 md:gap-6">
            <FaDollarSign className="text-white text-4xl p-2 bg-orange-400 rounded-full" />
            <h2 className="font-semibold text-xl lg:text-3xl">
              Cashback Bonus
            </h2>
          </div>
          <div className="flex items-center justify-start gap-2 md:gap-6">
            <FaShieldAlt className="text-white text-4xl p-2 bg-orange-400 rounded-full" />
            <h2 className="font-semibold text-xl lg:text-3xl">
              Secure Payment
            </h2>
          </div>
          <div className="flex items-center justify-start gap-2 md:gap-6">
            <FaTruck className="text-white text-4xl p-2 bg-orange-400 rounded-full" />
            <h2 className="font-semibold text-xl lg:text-3xl">
              Free Shipping &nbsp;&nbsp;
            </h2>
          </div>
        </div>
        <div className="flex md:justify-start justify-center gap-4 lg:my-24 my-12">
          <div className="hover:translate-y-[-.4em] duration-500 transition-transform cursor-pointer">
            <Image
              src="/assets/images/google-play-icon.png"
              alt="Not Available"
              width={150}
              height={150}
              style={{ height: "auto", width: "auto" }}
            />
          </div>
          <div className="hover:translate-y-[-.4em] duration-500 transition-transform cursor-pointer">
            <Image
              src="/assets/images/apps-store2.png"
              alt="Not Available"
              width={150}
              height={150}
              style={{ height: "auto", width: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="md:self-start sm:self-center">
        <Image
          src="/assets/images/Mobile.png"
          alt="Mobile Image"
          width={400}
          height={300}
          style={{ height: "auto", width: "auto" }}
        />
      </div>
    </div>
  );
};

export default Mobile;
