"use client";
import Image from "next/image";
import NavbarC from "../components/NavbarC";
const Button = dynamic(() => import("../components/Button"), { ssr: false });
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className="overflow-x-hidden">
      <NavbarC page="team" heading="Team" />
      <div className="flex justify-center items-center text-start flex-col my-12 ">
        <div className="flex justify-center gap-x-28 items-center text-start bg-white py-16">
          <div>
            <Image
              src="/assets/images/Grid4.jpg"
              alt="Not Available"
              width={450}
              height={200}
              style={{ height: "auto", width: "auto" }}
            />
          </div>
          <div className="text-lg">
            <h1 className="font-bold text-4xl my-5">
              We Rise From Zero <br /> To The Top
            </h1>
            <p className="tracking-tight text-wrap max-w-[30rem] my-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elitsadaa olsa
              estias magnam. Molestias sunt easculpa dolorem vel distinctio
              libero necessitatibus reiciendis ipsamre iciendis ipsam sdsadsa
              sads. necessitatibus reiciendis ip ipsam.
            </p>
            <p className="tracking-tight text-wrap max-w-[30rem] my-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elitsadaa olsa
              necessitatibus reiciendis ip ipsam.
            </p>

            <Button
              value="Learn More"
              type="button"
              click={() => {
                router.replace("/partner");
              }}
            />
          </div>
        </div>
        <div className="flex justify-start items-center text-center gap-4 my-8 mb-52">
          <div className="hover:translate-y-[-.4em] duration-500 transition-transform cursor-pointer bg-[#73a241] text-white py-4 px-12 rounded-lg">
            <h1 className="text-5xl font-bold my-2">300</h1>
            <p className="text-[#e7e6e6]">Trusted Partner</p>
          </div>
          <div className="hover:translate-y-[-.4em] duration-500 transition-transform cursor-pointer bg-[#73a241] text-white py-4 px-12 rounded-lg">
            <h1 className="text-5xl font-bold my-2">100+</h1>
            <p className="text-[#e7e6e6]">Expert Drivers</p>
          </div>
          <div className="hover:translate-y-[-.4em] duration-500 transition-transform cursor-pointer bg-[#73a241] text-white py-4 px-12 rounded-lg">
            <h1 className="text-5xl font-bold my-2">50+</h1>
            <p className="text-[#e7e6e6]">Orders Per Hour</p>
          </div>
          <div className="hover:translate-y-[-.4em] duration-500 transition-transform cursor-pointer bg-[#73a241ab] text-white py-[.7rem] px-12 rounded-lg">
            <Image
              src="/assets/images/car.png"
              alt="car"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#253138] relative py-20 mt-24 rounded-t-[35%] mx-[-8rem]">
        <div className="mt-[-16rem]  flex justify-center items-center flex-wrap gap-6 max-w-[65%] mx-auto">
          <Card path="Grid1.jpg" name="James Herald" />
          <Card path="Grid2.jpg" name="James Herald" />
          <Card path="Grid3.jpg" name="James Herald" />
          <Card path="Grid4.jpg" name="James Herald" />
          <Card path="Grid5.jpg" name="James Herald" />
          <Card path="Grid6.jpg" name="James Herald" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
