import Image from "next/image";
import Footer from "../components/Footer";
import NavbarC from "../components/NavbarC";
import Link from "next/link";
import NewsLetter from "../components/NewsLetter";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <NavbarC heading="Blogs" page="blog" />
      <div className="flex flex-col justify-center items-center text-center md:text-start my-24">
        <h1 className="text-4xl font-bold mb-12">Stories Around Us</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 place-items-center content-center items-center mx-3">
          <div className="rounded-lg flex flex-col items-center text-center justify-center gap-2 overflow-hidden flex-wrap shadow-2xl pb-2 sm:pb-6">
            <Link href="/reply">
              <Image
                src="/assets/images/ContactBg.jpg"
                alt="alt"
                width={200}
                height={200}
                style={{ height: "auto", width: "auto" }}
                className="rounded-t-xl hover:rotate-[2deg] hover:opacity-80 hover:scale-105 transform transition-all cursor-pointer duration-500"
              />
            </Link>

            <Link href="/reply">
              <h1 className="font-semibold text-lg mt-4 cursor-pointer">
                On-Time Delivery Guaranteed
              </h1>
            </Link>
            <p className="tracking-tighter text-sm md:text-lg max-w-[15rem]">
              Lorem ipsum dolor sit am
              <br />
              adipisicing elit.dipisicing
              <br />
              praesentium quod enim volu.asdsa
            </p>
            <Link
              href="/reply"
              className="text-[#F39F39] text-sm font-semibold py-4"
            >
              Learn More
            </Link>
          </div>
          <div className="rounded-lg flex flex-col items-center text-center justify-center gap-2 overflow-hidden flex-wrap shadow-2xl pb-2 sm:pb-6">
            <Link href="/reply">
              <Image
                src="/assets/images/AboutBg.jpg"
                alt="alt"
                width={200}
                height={200}
                style={{ height: "auto", width: "auto" }}
                className="rounded-t-xl hover:rotate-[2deg] hover:opacity-80 hover:scale-105 transform transition-all cursor-pointer duration-500"
              />
            </Link>

            <Link href="/reply">
              <h1 className="font-semibold text-lg mt-4 cursor-pointer">
                Specializing in Timely Deliveries
              </h1>
            </Link>
            <p className="tracking-tighter text-sm md:text-lg max-w-[15rem]">
              Lorem ipsum dolor sit am
              <br />
              adipisicing elit.dipisicing
              <br />
              praesentium quod enim volu.asdsa
            </p>
            <Link
              href="/reply"
              className="text-[#F39F39] text-sm font-semibold py-4"
            >
              Learn More
            </Link>
          </div>
          <div className="rounded-lg flex flex-col items-center text-center justify-center gap-2 overflow-hidden flex-wrap shadow-2xl pb-2 sm:pb-6">
            <Link href="/reply">
              <Image
                src="/assets/images/PartnerBg.jpg"
                alt="alt"
                width={200}
                height={200}
                style={{ height: "auto", width: "auto" }}
                className="rounded-t-xl hover:rotate-[2deg] hover:opacity-80 hover:scale-105 transform transition-all cursor-pointer duration-500"
              />
            </Link>

            <Link href="/reply">
              <h1 className="font-semibold text-lg mt-4 cursor-pointer">
                New Meaning For Delivery
              </h1>
            </Link>
            <p className="tracking-tighter text-sm md:text-lg max-w-[15rem]">
              Lorem ipsum dolor sit am
              <br />
              adipisicing elit.dipisicing
              <br />
              praesentium quod enim volu.asdsa
            </p>
            <Link
              href="/reply"
              className="text-[#F39F39] text-sm font-semibold py-4"
            >
              Learn More
            </Link>
          </div>
          <div className="rounded-lg flex flex-col items-center text-center justify-center gap-2 overflow-hidden flex-wrap shadow-2xl pb-2 sm:pb-6">
            <Link href="/reply">
              <Image
                src="/assets/images/PricingBg.jpg"
                alt="alt"
                width={200}
                height={200}
                style={{ height: "auto", width: "auto" }}
                className="rounded-t-xl hover:rotate-[2deg] hover:opacity-80 hover:scale-105 transform transition-all cursor-pointer duration-500"
              />
            </Link>
            <Link href="/reply">
              <h1 className="font-semibold text-lg mt-4 cursor-pointer">
                Your Last Mile is Our First Mile
              </h1>
            </Link>
            <p className="tracking-tighter text-sm md:text-lg max-w-[15rem]">
              Lorem ipsum dolor sit am
              <br />
              adipisicing elit.dipisicing
              <br />
              praesentium quod enim volu.asdsa
            </p>
            <Link
              href="/reply"
              className="text-[#F39F39] text-sm font-semibold py-4"
            >
              Learn More
            </Link>
          </div>
          <div className="rounded-lg flex flex-col items-center text-center justify-center gap-2 overflow-hidden flex-wrap shadow-2xl pb-2 sm:pb-6">
            <Link href="/reply">
              <Image
                src="/assets/images/ServiceBg.jpg"
                alt="alt"
                width={200}
                height={200}
                style={{ height: "auto", width: "auto" }}
                className="rounded-t-xl hover:rotate-[2deg] hover:opacity-80 hover:scale-105 transform transition-all cursor-pointer duration-500"
              />
            </Link>
            <Link href="/reply">
              <h1 className="font-semibold text-lg mt-4 cursor-pointer">
                We’re Different Around Here.
              </h1>
            </Link>
            <p className="tracking-tighter text-sm md:text-lg max-w-[15rem]">
              Lorem ipsum dolor sit am
              <br />
              adipisicing elit.dipisicing
              <br />
              praesentium quod enim volu.asdsa
            </p>
            <Link
              href="/reply"
              className="text-[#F39F39] text-sm font-semibold py-4"
            >
              Learn More
            </Link>
          </div>
          <div className="rounded-lg flex flex-col items-center text-center justify-center gap-2 overflow-hidden flex-wrap shadow-2xl pb-2 sm:pb-6">
            <Link href="/reply">
              <Image
                src="/assets/images/BlogBg.jpg"
                alt="alt"
                width={200}
                height={200}
                style={{ height: "auto", width: "auto" }}
                className="rounded-t-xl hover:rotate-[2deg] hover:opacity-80 hover:scale-105 transform transition-all cursor-pointer duration-500"
              />
            </Link>
            <Link href="/reply">
              <h1 className="font-semibold text-lg mt-4 cursor-pointer">
                On-Time Delivery Guaranteed
              </h1>
            </Link>
            <p className="tracking-tighter text-sm md:text-lg max-w-[15rem]">
              Lorem ipsum dolor sit am
              <br />
              adipisicing elit.dipisicing
              <br />
              praesentium quod enim volu.asdsa
            </p>
            <Link
              href="/reply"
              className="text-[#F39F39] text-sm font-semibold py-4"
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
