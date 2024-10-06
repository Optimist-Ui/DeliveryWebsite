"use client";
import Image from "next/image";
const Button = dynamic(() => import("../components/Button"), { ssr: false });
import dynamic from "next/dynamic";
import Mobile from "./Mobile";
import { useRouter } from "next/navigation";

const Crew = () => {
  const router = useRouter();
  return (
    <div className="my-28">
      <div className="bg-[url('/assets/images/Background.jpg')] bg-no-repeat mx-[-8rem] relative bg-contain bg-center bg-fixed overflow-hidden rounded-b-[30%]">
        <div className="text-center bg-[#253138] bg-opacity-75 pb-[15rem] pt-16 text-white">
          <h1 className="font-bold text-4xl my-8">Join The Crew</h1>
        </div>
      </div>
      <div className="text-white my-16">
        <div className="flex mt-[-12.5rem] justify-center flex-col gap-4 text-center items-center">
          <div className="flex justify-center text-lg items-start relative text-start align-text-bottom gap-12">
            <div className="relative">
              <Image
                src="/assets/images/bicycle.png"
                alt="alt"
                width={90}
                height={90}
                className="mx-[5%] mb-[-8%] bg-[#e1ecb8] p-2 rounded-xl relative"
                style={{ height: "auto", width: "auto" }}
              />

              <div className="bg-[#253138] py-8 px-8 rounded-lg ">
                <h1 className="font-semibold text-2xl my-4">Swift Biker</h1>
                <p className="pb-8">
                  Lorem ipsum dolor sit ametametamet.
                  <br />
                  sdfds Lorem ipsum dolor sit amet.
                  <br />
                  Lorem ipsum dolor amet.
                </p>
                <Button
                  value="Join Us"
                  type="button"
                  click={() => {
                    router.replace("/team");
                  }}
                />
              </div>
            </div>
            <div>
              <Image
                src="/assets/images/bike.png"
                alt="alt"
                width={90}
                height={90}
                className="mx-[5%] mb-[-8%] bg-[#e1ecb8] p-2 rounded-xl relative"
                style={{ height: "auto", width: "auto" }}
              />
              <div className="bg-[#253138] py-8 px-8 rounded-lg">
                <h1 className="font-semibold text-2xl my-4">Motocycle Rider</h1>
                <p className="pb-8">
                  Lorem ipsum dolor sit ametametam.
                  <br />
                  sdfds Lorem ipsum dolor sit amet.
                  <br />
                  Lorem ipsum dolor ametametametam.
                </p>
                <Button
                  value="Join Us"
                  type="button"
                  click={() => {
                    router.replace("/team");
                  }}
                />
              </div>
            </div>
            <div>
              <Image
                src="/assets/images/car.png"
                alt="alt"
                width={90}
                height={90}
                className="mx-[5%] mb-[-8%] bg-[#e1ecb8] p-2 rounded-xl relative"
                style={{ height: "auto", width: "auto" }}
              />
              <div className="bg-[#253138] py-8 px-8 rounded-lg">
                <h1 className="font-semibold text-2xl my-4">Pickup Driver</h1>
                <p className="pb-8">
                  Lorem ipsum dolor sit ametametamet.
                  <br />
                  sdfds Lorem ipsum dolor sit ametam.
                  <br />
                  Lorem ipsum dolor ametametameta.
                </p>
                <Button
                  value="Join Us"
                  type="button"
                  click={() => {
                    router.replace("/team");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Mobile />
    </div>
  );
};

export default Crew;
