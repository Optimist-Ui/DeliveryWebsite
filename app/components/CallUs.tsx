"use client";
import Image from "next/image";
const Button = dynamic(() => import("../components/Button"), { ssr: false });
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const CallUs = () => {
  const router = useRouter();

  return (
    <div className="flex md:flex-row flex-col justify-center gap-x-28 items-center text-center md:text-start bg-white py-16">
      <div>
        <Image
          src="/assets/images/callsectionimage.png"
          alt="Not Available"
          width={385}
          height={200}
          priority
          style={{ height: "auto", width: "auto" }}
        />
      </div>
      <div className="lg:text-lg md:text-base text-sm">
        <h1 className="font-bold text-4xl my-5">
          Do You Want A Fast <br /> Service Just Call Us.
        </h1>
        <p className="tracking-tight text-wrap max-w-[30rem] my-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elitsadaa olsa
          estias magnam. Molestias sunt easculpa dolorem vel distinctio libero
          necessitatibus reiciendis ipsamre iciendis ipsam sdsadsa sads.
          necessitatibus reiciendis ip ipsam.
        </p>

        <Button
          value="Call Us"
          type="button"
          click={() => router.replace("/faq")}
        />
      </div>
    </div>
  );
};

export default CallUs;
