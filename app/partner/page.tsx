"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "../components/Footer";
import NavbarC from "../components/NavbarC";
import Service from "../components/Service";
const Button = dynamic(() => import("../components/Button"), { ssr: false });
import dynamic from "next/dynamic";
import Carousel from "../components/Carousel";

const page = () => {
  const router = useRouter();
  return (
    <div className="overflow-x-hidden">
      <NavbarC page="partner" heading="Be A Partner" />
      <div className="flex flex-col justify-center items-center text-start my-24 text-lg">
        <h1 className="font-bold text-5xl my-16 w-[55%]">
          Choose Your Partnership
        </h1>
        <div className="flex justify-center items-center text-start gap-12">
          <div className="flex items-start text-start justify-center flex-col gap-4">
            <Image
              src="/assets/images/food-1.png"
              alt="alt"
              width={180}
              height={180}
              style={{ height: "auto", width: "auto" }}
            />
            <h2 className="font-semibold text-2xl">Food Delivery</h2>
            <p className="text-[#838383]">
              Lorem ipsum dolor sit amet, consectetur <br />
              adipisicing elit.Odit eos nihil dolores?
              <br /> nihil dolo dolo ?
            </p>
            <Button
              value="Register"
              type="button"
              click={() => {
                router.replace("/reply");
              }}
            />
          </div>
          <div className="flex items-start text-start justify-center flex-col gap-4">
            <Image
              src="/assets/images/grocry.png"
              alt="alt"
              width={200}
              height={180}
              style={{ height: "auto", width: "auto" }}
            />
            <h2 className="font-semibold text-2xl">Grocery Store</h2>
            <p className="text-[#838383]">
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipisicing elit.Odit eos nihil dolores?
              <br /> nihil dolo dolo ?
            </p>
            <Button
              value="Register"
              type="button"
              click={() => {
                router.replace("/reply");
              }}
            />
          </div>
          <div className="flex items-start text-start justify-center flex-col gap-4">
            <Image
              src="/assets/images/londri.png"
              alt="alt"
              width={130}
              height={150}
              style={{ height: "auto", width: "auto" }}
            />
            <h2 className="font-semibold text-2xl">Laundry Pickup</h2>
            <p className="text-[#838383]">
              Lorem ipsum dolor sit amet, consectetur <br />
              adipisicing elit.Odit eos nihil dolores?
              <br /> nihil dolo dolo ?
            </p>
            <Button
              value="Register"
              type="button"
              click={() => {
                router.replace("/reply");
              }}
            />
          </div>
        </div>
      </div>
      <Service />
      <div className="my-20">
        <Carousel />
      </div>
      <Footer />
    </div>
  );
};

export default page;
