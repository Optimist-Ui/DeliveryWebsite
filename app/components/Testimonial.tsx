"use client";
import { useRouter } from "next/navigation";
const Button = dynamic(() => import("../components/Button"), { ssr: false });
import dynamic from "next/dynamic";

const Testimonial = () => {
  const router = useRouter();
  return (
    <div>
      <div className="bg-[#253138] text-white text-center items-center py-16 rounded-b-[30%] mx-[-6rem] pb-[12rem] my-12">
        <h1 className="font-bold text-4xl my-8 mx-16">Customer Testimonial</h1>
        <Button
          type="button"
          value="Get More"
          click={() => {
            router.replace("/about");
          }}
        />
      </div>
    </div>
  );
};

export default Testimonial;
