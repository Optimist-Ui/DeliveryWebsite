import Image from "next/image";
import Footer from "../components/Footer";
import NavbarC from "../components/NavbarC";
import Link from "next/link";
import NewsLetter from "../components/NewsLetter";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <NavbarC heading="Blogs" page="blog" />
      <div className="flex flex-col justify-center items-center text-start my-24">
        <h1 className="text-4xl font-bold mb-12">Stories Around Us</h1>
        <div className="flex justify-center items-center text-start gap-8 flex-wrap max-w-[65%]">
          <div className="rounded-lg flex flex-col items-start justify-center gap-2 overflow-hidden flex-wrap shadow-2xl pb-6">
            <div className="overflow-hidden">
              <Link
                href="/reply"
                className="text-[#F39F39] pl-4 text-sm font-semibold py-4"
              >
                <Image
                  src="/assets/images/ContactBg.jpg"
                  alt="alt"
                  width={380}
                  height={400}
                  style={{ height: "auto", width: "auto" }}
                  className="rounded-t-xl hover:rotate-[2deg] hover:opacity-80 hover:scale-105 transform transition-all cursor-pointer duration-500"
                />
              </Link>
            </div>
            <Link href="/reply">
              <h1 className="pl-4 font-semibold text-xl mt-4 cursor-pointer">
                On-Time Delivery Guaranteed
              </h1>
            </Link>
            <p className="pl-4 max-w-[25rem]">
              Lorem ipsum dolor sit am etametam etametam
              <br />
              adipisicing elit.dipisicing elit.dipisicing elitelit.
              <br />
              tetur expedita aliquam libero aliquam elero eli
              <br />
              gendi id nisi, modi facere facere facerere facere
              <br />
              praesentium quod enim volu.
            </p>
            <Link
              href="/reply"
              className="text-[#F39F39] pl-4 text-sm font-semibold py-4"
            >
              Learn More
            </Link>
          </div>
          <div className="rounded-lg flex flex-col items-start justify-center gap-2 overflow-hidden flex-wrap shadow-2xl pb-6">
            <div className="overflow-hidden">
              <Link
                href="/reply"
                className="text-[#F39F39] pl-4 text-sm font-semibold py-4"
              >
                <Image
                  src="/assets/images/AboutBg.jpg"
                  alt="alt"
                  width={380}
                  height={400}
                  style={{ height: "auto", width: "auto" }}
                  className="rounded-t-xl hover:rotate-[2deg] hover:opacity-80 hover:scale-105 transform transition-all cursor-pointer duration-500"
                />
              </Link>
            </div>
            <Link href="/reply">
              <h1 className="pl-4 font-semibold text-xl mt-4 cursor-pointer">
                Specializing in Timely Deliveries
              </h1>
            </Link>
            <p className="pl-4 max-w-[25rem]">
              Lorem ipsum dolor sit am etametam etametam
              <br />
              adipisicing elit.dipisicing elit.dipisicing elitelit.
              <br />
              tetur expedita aliquam libero aliquam elero eli
              <br />
              gendi id nisi, modi facere facere facerere facere
              <br />
              praesentium quod enim volu.
            </p>
            <Link
              href="/reply"
              className="text-[#F39F39] pl-4 text-sm font-semibold py-4"
            >
              Learn More
            </Link>
          </div>
          <div className="rounded-lg flex flex-col items-start justify-center gap-2 overflow-hidden flex-wrap shadow-2xl pb-6">
            <div className="overflow-hidden">
              <Link
                href="/reply"
                className="text-[#F39F39] pl-4 text-sm font-semibold py-4"
              >
                <Image
                  src="/assets/images/PartnerBg.jpg"
                  alt="alt"
                  width={380}
                  height={400}
                  style={{ height: "auto", width: "auto" }}
                  className="rounded-t-xl hover:rotate-[2deg] hover:opacity-80 hover:scale-105 transform transition-all cursor-pointer duration-500"
                />
              </Link>
            </div>
            <Link href="/reply">
              <h1 className="pl-4 font-semibold text-xl mt-4 cursor-pointer">
                New Meaning For Delivery
              </h1>
            </Link>
            <p className="pl-4 max-w-[25rem]">
              Lorem ipsum dolor sit am etametam etametam
              <br />
              adipisicing elit.dipisicing elit.dipisicing elitelit.
              <br />
              tetur expedita aliquam libero aliquam elero eli
              <br />
              gendi id nisi, modi facere facere facerere facere
              <br />
              praesentium quod enim volu.
            </p>
            <Link
              href="/reply"
              className="text-[#F39F39] pl-4 text-sm font-semibold py-4"
            >
              Learn More
            </Link>
          </div>
          <div className="rounded-lg flex flex-col items-start justify-center gap-2 overflow-hidden flex-wrap shadow-2xl pb-6">
            <div className="overflow-hidden">
              <Link
                href="/reply"
                className="text-[#F39F39] pl-4 text-sm font-semibold py-4"
              >
                <Image
                  src="/assets/images/PricingBg.jpg"
                  alt="alt"
                  width={380}
                  height={400}
                  style={{ height: "auto", width: "auto" }}
                  className="rounded-t-xl hover:rotate-[2deg] hover:opacity-80 hover:scale-105 transform transition-all cursor-pointer duration-500"
                />
              </Link>
            </div>
            <Link href="/reply">
              <h1 className="pl-4 font-semibold text-xl mt-4 cursor-pointer">
                Your Last Mile is Our First Mile
              </h1>
            </Link>
            <p className="pl-4 max-w-[25rem]">
              Lorem ipsum dolor sit am etametam etametam
              <br />
              adipisicing elit.dipisicing elit.dipisicing elitelit.
              <br />
              tetur expedita aliquam libero aliquam elero eli
              <br />
              gendi id nisi, modi facere facere facerere facere
              <br />
              praesentium quod enim volu.
            </p>
            <Link
              href="/reply"
              className="text-[#F39F39] pl-4 text-sm font-semibold py-4"
            >
              Learn More
            </Link>
          </div>
          <div className="rounded-lg flex flex-col items-start justify-center gap-2 overflow-hidden flex-wrap shadow-2xl pb-6">
            <div className="overflow-hidden">
              <Link
                href="/reply"
                className="text-[#F39F39] pl-4 text-sm font-semibold py-4"
              >
                <Image
                  src="/assets/images/ServiceBg.jpg"
                  alt="alt"
                  width={380}
                  height={400}
                  style={{ height: "auto", width: "auto" }}
                  className="rounded-t-xl hover:rotate-[2deg] hover:opacity-80 hover:scale-105 transform transition-all cursor-pointer duration-500"
                />
              </Link>
            </div>
            <Link href="/reply">
              <h1 className="pl-4 font-semibold text-xl mt-4 cursor-pointer">
                We’re Different Around Here.
              </h1>
            </Link>
            <p className="pl-4 max-w-[25rem]">
              Lorem ipsum dolor sit am etametam etametam
              <br />
              adipisicing elit.dipisicing elit.dipisicing elitelit.
              <br />
              tetur expedita aliquam libero aliquam elero eli
              <br />
              gendi id nisi, modi facere facere facerere facere
              <br />
              praesentium quod enim volu.
            </p>
            <Link
              href="/reply"
              className="text-[#F39F39] pl-4 text-sm font-semibold py-4"
            >
              Learn More
            </Link>
          </div>
          <div className="rounded-lg flex flex-col items-start justify-center gap-2 overflow-hidden flex-wrap shadow-2xl pb-6">
            <div className="overflow-hidden">
              <Link
                href="/reply"
                className="text-[#F39F39] pl-4 text-sm font-semibold py-4"
              >
                <Image
                  src="/assets/images/BlogBg.jpg"
                  alt="alt"
                  width={380}
                  height={400}
                  style={{ height: "auto", width: "auto" }}
                  className="rounded-t-xl hover:rotate-[2deg] hover:opacity-80 hover:scale-105 transform transition-all cursor-pointer duration-500"
                />
              </Link>
            </div>
            <Link href="/reply">
              <h1 className="pl-4 font-semibold text-xl mt-4 cursor-pointer">
                On-Time Delivery Guaranteed
              </h1>
            </Link>
            <p className="pl-4 max-w-[25rem]">
              Lorem ipsum dolor sit am etametam etametam
              <br />
              adipisicing elit.dipisicing elit.dipisicing elitelit.
              <br />
              tetur expedita aliquam libero aliquam elero eli
              <br />
              gendi id nisi, modi facere facere facerere facere
              <br />
              praesentium quod enim volu.
            </p>
            <Link
              href="/reply"
              className="text-[#F39F39] pl-4 text-sm font-semibold py-4"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default page;
