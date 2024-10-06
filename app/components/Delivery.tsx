"use client";
import Image from "next/image";
const Button = dynamic(() => import("../components/Button"), { ssr: false });
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const Delivery = () => {
  const router = useRouter();
  return (
    <div>
      <div className="bg-[#253138] text-white text-center items-center py-12 pb-[10rem] my-6">
        <h1 className="font-bold text-4xl my-8">How Delivery Works</h1>
        <p className="pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          rem! <br /> Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="bg-white">
        <div className=" flex justify-center text-center items-center gap-24 mx-[-5rem] bg-white relative rounded-t-[50%] top-[-8rem]">
          <div className="flex justify-center flex-col text-center items-center relative z-10 top-[-3rem]">
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
            <p>
              Lorem ipsum dolor sit amet,
              <br />
              Ratione nostrum amet odit.
            </p>
            <select className="mt-6 outline-none p-2 text-lg text-orange-300 font-semibold cursor-pointer">
              <option>More Info</option>
            </select>
          </div>
          <div className="flex justify-center flex-col text-center items-center relative z-10 top-[-3rem]">
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
            <p>
              Lorem ipsum dolor sit amet,
              <br />
              Ratione nostrum amet odit.
            </p>
            <select className="mt-6 outline-none p-2 text-lg text-orange-300 font-semibold cursor-pointer">
              <option>More Info</option>
            </select>
          </div>
          <div className="flex justify-center flex-col text-center items-center relative z-10 top-[-3rem]">
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
            <p>
              Lorem ipsum dolor sit amet,
              <br />
              Ratione nostrum amet odit.
            </p>
            <select className="mt-6 outline-none p-2 text-lg text-orange-300 font-semibold cursor-pointer">
              <option>More Info</option>
            </select>
          </div>
          <div className="flex justify-center flex-col text-center items-center relative z-10 top-[-3rem]">
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
            <p>
              Lorem ipsum dolor sit amet,
              <br />
              Ratione nostrum amet odit.
            </p>
            <select className="mt-6 outline-none p-2 text-lg text-orange-300 font-semibold cursor-pointer">
              <option>More Info</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center mb-32 gap-12 items-center mt-[-6rem] text-start py-2">
          <div className="text-lg">
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
