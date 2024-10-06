import Image from "next/image";
import { FaDollarSign, FaShieldAlt, FaTruck } from "react-icons/fa";

const Mobile = () => {
  return (
    <div className="flex justify-center items-center text-start text-2xl mt-24">
      <div>
        <h1 className="font-bold text-4xl my-8 text-[#3a3a3a]">
          Order From Our Apps And Get <br /> Special Offer
        </h1>
        <p className="text-[#3a3a3a]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus
          dolor <br />
          labore reiciendis vitae quaerat laborum culpa velit, dolorum porro
          <br />
          numquam ratione, accusamus dignissimos! Cumque.
        </p>
        <div>
          <div className="flex items-center text-center justify-start gap-6 my-6">
            <FaDollarSign className="text-white text-4xl p-2 bg-orange-400 rounded-full" />
            <h2 className="font-semibold text-3xl">Cashback Bonus</h2>
          </div>
          <div className="flex items-center text-center justify-start gap-6 my-6">
            <FaShieldAlt className="text-white text-4xl p-2 bg-orange-400 rounded-full" />
            <h2 className="font-semibold text-3xl">Secure Payment</h2>
          </div>
          <div className="flex items-center text-center justify-start gap-6 my-6">
            <FaTruck className="text-white text-4xl p-2 bg-orange-400 rounded-full" />
            <h2 className="font-semibold text-3xl">Free Shipping</h2>
          </div>
        </div>
        <div className="flex justify-start items-center text-center gap-4 my-24">
          <div className="hover:translate-y-[-.4em] duration-500 transition-transform cursor-pointer">
            <Image
              src="/assets/images/google-play-icon.png"
              alt="Not Available"
              width={180}
              height={180}
              style={{ height: "auto", width: "auto" }}
            />
          </div>
          <div className="hover:translate-y-[-.4em] duration-500 transition-transform cursor-pointer">
            <Image
              src="/assets/images/apps-store2.png"
              alt="Not Available"
              width={180}
              height={180}
              style={{ height: "auto", width: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="self-start">
        <Image
          src="/assets/images/Mobile.png"
          alt="Mobile Image"
          width={400}
          height={400}
          style={{ height: "auto", width: "auto" }}
        />
      </div>
    </div>
  );
};

export default Mobile;
