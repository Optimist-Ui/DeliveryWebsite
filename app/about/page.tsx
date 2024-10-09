import { FaDollarSign, FaShieldAlt, FaTruck } from "react-icons/fa";
import NavbarC from "../components/NavbarC";
import Image from "next/image";
import Delivery from "../components/Delivery";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <NavbarC heading="About Us" page="about" />
      <div className="flex lg:flex-row flex-col-reverse md:mx-12 sm:mx-8 mx-2 justify-center items-center lg:text-start text-center lg:text-xl text-base mt-20  gap-32 ">
        <div>
          <h1 className="font-[650] text-5xl mb-6 text-[#3a3a3a]">
            Best Service To Deliver <br />
            Your Needs
          </h1>
          <p className="text-[#3a3a3a] text-base lg:text-base xl:text-xl tracking-tighter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            labore reiciendis vitae quaerat laborum culpa velit,
            <br />
            numquam ratione, accusamus dignissimos! Cumque.
          </p>
          <div className="flex lg:justify-start justify-center items-center text-center gap-4 my-8">
            <div className="hover:translate-y-[-.4em] duration-500 transition-transform cursor-pointer bg-[#73a241] text-white p-2 sm:py-2 sm:px-6 md:py-4 md:px-12 rounded-lg">
              <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold my-2">
                300
              </h1>
              <p className="text-[#e7e6e6]">Trusted Partner</p>
            </div>
            <div className="hover:translate-y-[-.4em] duration-500 transition-transform cursor-pointer bg-[#73a241] text-white p-2 sm:py-2 sm:px-6 md:py-4 md:px-12 rounded-lg">
              <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold my-2">
                100+
              </h1>
              <p className="text-[#e7e6e6]">Expert Drivers</p>
            </div>
          </div>
        </div>
        <div className="lg:self-end self-center">
          <Image
            src="/assets/images/AboutPageMan.png"
            alt="Mobile Image"
            width={600}
            height={400}
            style={{ height: "auto", width: "auto" }}
          />
        </div>
      </div>
      <Delivery />
      <div className="mb-40">
        <Testimonial />
        <Carousel />
      </div>
      <Footer />
    </div>
  );
};

export default page;
