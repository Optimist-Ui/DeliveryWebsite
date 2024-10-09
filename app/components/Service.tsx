"use client";
import Image from "next/image";
const Button = dynamic(() => import("../components/Button"), { ssr: false });
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const Service = () => {
  const router = useRouter();
  return (
    <div className="relative">
      <div className="bg-[#253138] text-white text-center items-center pt-16 pb-[10rem] sm:pb-[22rem]  ">
        <h1 className="font-bold md:text-4xl lg:text-5xl my-8">
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
      <div className=" sm:mt-[-10rem] mx-[-2.5rem] sm:mx-[-5rem]">
        <div className="rounded-t-[50%] bg-white flex md:flex-row flex-col justify-center text-center items-center md:items-baseline mb-32 gap-8 lg:text-xl text-sm">
          <div className="flex justify-center relative flex-col text-center lg:gap-2 items-center mt-4 sm:mt-0 sm:transform translate-y-[-8rem] ">
            <Image
              src="/assets/images/SwiftDelivery.png"
              alt="Not Available !"
              width={400}
              height={230}
              style={{ height: "auto", width: "auto" }}
            />
            <h1 className="font-bold">Swift Delivery</h1>
            <p>
              Lorem ipsum dolor sit amet,
              <br />
              Ratione nostrum amet odit.
            </p>
          </div>
          <div className="flex justify-center flex-col text-center items-center gap-2 sm:transform translate-y-[-8rem]">
            <Image
              src="/assets/images/TrustedService.png"
              alt="Not Available !"
              width={130}
              height={230}
              style={{ height: "auto", width: "auto" }}
            />
            <h1 className="font-bold">Trusted Service</h1>
            <p>
              Lorem ipsum dolor sit amet,
              <br />
              Ratione nostrum amet odit.
            </p>
          </div>
          <div className="flex justify-center flex-col text-center items-center gap-2 sm:transform translate-y-[-8rem]">
            <Image
              src="/assets/images/Vaccinated.png"
              alt="Not Available !"
              width={400}
              height={230}
              style={{ height: "auto", width: "auto" }}
            />
            <h1 className="font-bold">Vaccinated Courier</h1>
            <p>
              Lorem ipsum dolor sit amet,
              <br />
              Ratione nostrum amet odit.
            </p>
          </div>
          <div className="flex justify-center flex-col text-center items-center gap-2 sm:transform translate-y-[-8rem] ">
            <Image
              src="/assets/images/ProtectedProtocol.png"
              alt="Not Available !"
              width={400}
              height={230}
              style={{ height: "auto", width: "auto" }}
            />
            <h1 className="font-bold">Safety Protocol</h1>
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
