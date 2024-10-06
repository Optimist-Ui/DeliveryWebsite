"use client";
import Image from "next/image";
const Button = dynamic(() => import("../components/Button"), { ssr: false });
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const Service = () => {
  const router = useRouter();
  return (
    <div className="relative">
      <div className="bg-[#253138] text-white text-center items-center pt-16 pb-[22rem] mb-[-8rem]">
        <h1 className="font-bold text-4xl my-8">
          Try Us And See How Good <br /> Our Services Are.
        </h1>
        <Button
          type="button"
          value="Learn More"
          click={() => {
            router.replace("/service");
          }}
        />
      </div>
      <div className="bg-white rounded-t-[50%] mx-[-5rem]">
        <div className=" flex justify-center text-center items-baseline gap-8 mb-32">
          <div className="flex justify-center  flex-col text-center gap-2 items-center  mt-[-10rem]">
            <Image
              src="/assets/images/SwiftDelivery.png"
              alt="Not Available !"
              width={230}
              height={230}
              style={{ height: "auto", width: "auto" }}
            />
            <h1 className="font-semibold text-2xl">Swift Delivery</h1>
            <p>
              Lorem ipsum dolor sit amet,
              <br />
              Ratione nostrum amet odit.
            </p>
          </div>
          <div className="flex justify-center flex-col text-center items-center gap-2 mt-[-10rem]">
            <Image
              src="/assets/images/TrustedService.png"
              alt="Not Available !"
              width={230}
              height={230}
              style={{ height: "auto", width: "auto" }}
            />
            <h1 className="font-semibold text-2xl">Trusted Service</h1>
            <p>
              Lorem ipsum dolor sit amet,
              <br />
              Ratione nostrum amet odit.
            </p>
          </div>
          <div className="flex justify-center flex-col text-center items-center gap-2 mt-[-10rem] ">
            <Image
              src="/assets/images/Vaccinated.png"
              alt="Not Available !"
              width={230}
              height={230}
              style={{ height: "auto", width: "auto" }}
            />
            <h1 className="font-semibold text-2xl">Vaccinated Courier</h1>
            <p>
              Lorem ipsum dolor sit amet,
              <br />
              Ratione nostrum amet odit.
            </p>
          </div>
          <div className="flex justify-center flex-col text-center items-center gap-2 mt-[-10rem]">
            <Image
              src="/assets/images/ProtectedProtocol.png"
              alt="Not Available !"
              width={230}
              height={230}
              style={{ height: "auto", width: "auto" }}
            />
            <h1 className="font-semibold text-2xl ">Safety Protocol</h1>
            <p>
              Lorem ipsum dolor sit amet,
              <br />
              Ratione nostrum amet odit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
