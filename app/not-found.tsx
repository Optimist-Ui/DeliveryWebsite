"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "./components/Footer";
const Button = dynamic(() => import("./components/Button"), { ssr: false });
import dynamic from "next/dynamic";
import NavLinks from "./components/NavLinks";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="bg-[#253138]">
      <div className="py-6">
        <NavLinks />
      </div>
      <div className="bg-[#253138] text-white flex flex-col mx-4 items-center text-center justify-center gap-8 py-[0.49rem] ">
        <Image
          src="/assets/images/404.png"
          alt="404"
          width={600}
          height={600}
          priority
          style={{ height: "auto", width: "auto" }}
        />
        <h1 className="text-5xl font-bold">
          Oops! Page Is Unavailable &#128533;
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        </p>
        <Button
          value="Go Back"
          type="button"
          click={() => {
            router.back();
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
