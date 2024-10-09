"use client";
import Image from "next/image";
const Button = dynamic(() => import("../components/Button"), { ssr: false });
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const Delivery = () => {
  const router = useRouter();
  return (
    <div className="relative">
      <div className="bg-[#253138] text-white text-center items-center pt-16 pb-[5rem] sm:pb-[15rem]">
        <h1 className="font-bold text-4xl my-8">How Delivery Works</h1>
        <p className="pb-10 mx-4 md:text-lg text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          rem! <br /> Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="sm:mt-[-10rem] mx-[-2.5rem] sm:mx-[-5rem]">
        <div className="rounded-t-[50%] bg-white flex lg:flex-row flex-col flex-wrap justify-center text-center items-center lg:items-baseline mb-32 gap-2 md:gap-8 xl:gap-32 lg:gap-10 lg:text-xl text-sm">
          <div className="flex justify-center flex-col text-center items-center relative top-[-1rem]">
            <Image
              src="/assets/images/Cart.png"
              alt="Not Available !"
              width={80}
              height={80}
              priority={true}
              className="rounded-[15%]"
              style={{ height: "auto", width: "auto" }}
            />
            <h1 className="font-semibold text-2xl my-5">1. Place Your Order</h1>
            <p className="lg:text-lg tracking-tighter md:text-base">
              Lorem ipsum dolor sit amet,
              <br />
              Ratione nostrum amet odit.
            </p>
            <select className="mt-6 outline-none p-2 text-lg text-orange-300 font-semibold cursor-pointer">
              <option>More Info</option>
            </select>
          </div>
          <div className="flex justify-center flex-col text-center items-center relative top-[-1rem]">
            <Image
              src="/assets/images/pay.png"
              alt="Not Available !"
              width={80}
              height={80}
              priority={true}
              className="rounded-[15%]"
              style={{ height: "auto", width: "auto" }}
            />
            <h1 className="font-semibold text-2xl my-5">2. Pay Order</h1>
            <p className="lg:text-lg tracking-tighter md:text-base">
              Lorem ipsum dolor sit amet,
              <br />
              Ratione nostrum amet odit.
            </p>
            <select className="mt-6 outline-none p-2 text-lg text-orange-300 font-semibold cursor-pointer">
              <option>More Info</option>
            </select>
          </div>
          <div className="flex justify-center flex-col text-center items-center relative top-[-1rem]">
            <Image
              src="/assets/images/deliver.png"
              alt="Not Available !"
              width={80}
              height={80}
              priority={true}
              className="rounded-[15%]"
              style={{ height: "auto", width: "auto" }}
            />
            <h1 className="font-semibold text-2xl my-5">3. Order Delivered</h1>
            <p className="lg:text-lg tracking-tighter md:text-base">
              Lorem ipsum dolor sit amet,
              <br />
              Ratione nostrum amet odit.
            </p>
            <select className="mt-6 outline-none p-2 text-lg text-orange-300 font-semibold cursor-pointer">
              <option>More Info</option>
            </select>
          </div>
          <div className="flex justify-center flex-col text-center items-center relative top-[-1rem]">
            <Image
              src="/assets/images/recieve.png"
              alt="Not Available !"
              width={80}
              height={80}
              priority={true}
              className="rounded-[15%]"
              style={{ height: "auto", width: "auto" }}
            />
            <h1 className="font-semibold text-2xl my-5">
              4. Receive Your Order
            </h1>
            <p className="lg:text-lg tracking-tighter md:text-base">
              Lorem ipsum dolor sit amet,
              <br />
              Ratione nostrum amet odit.
            </p>
            <select className="mt-6 outline-none p-2 text-lg text-orange-300 font-semibold cursor-pointer">
              <option>More Info</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center lg:flex-row flex-col-reverse mb-32 gap-4 md:gap-6 lg:gap-8 xl:gap-12 items-center mt-[-6rem] text-center lg:text-start py-2">
          <div className="md:text-lg text-base mx-12">
            <h1 className="font-bold text-4xl my-5">
              Stay at Home We Will <br /> Deliver Your Order
            </h1>
            <p className="tracking-tighter text-wrap max-w-[30rem] my-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elitsadaa olsa
              Lorem ipsum, dolor sit amet consectetur adipisicing elitsadaa olsa
              libero necessitatibus reiciendis ipsamre iciendis ipsam sdsadsa
              sads. necessitatibus reiciendis ip ipsam.
            </p>

            <Button
              value="Order Now"
              type="button"
              click={() => {
                router.replace("/pricing");
              }}
            />
          </div>
          <div>
            <Image
              src="/assets/images/DeliverySection.png"
              alt="Not Available"
              width={550}
              priority={true}
              height={200}
              style={{ height: "auto", width: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
