"use client";
import Image from "next/image";
const Button = dynamic(() => import("../components/Button"), { ssr: false });
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const ItemList = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center flex-col gap-4 text-center items-center">
      <h1 className="font-bold text-4xl">We Deliver Everything</h1>
      <p className="mb-12">
        Lorem ipsum dolor, sit amet consectetursit amet consectetur adipisicing
        elit. Ipsam, maiores.
      </p>
      <div className="flex justify-center text-lg items-center relative text-center align-text-bottom gap-12">
        <div>
          <Image
            src="/assets/images/burg.png"
            alt="alt"
            width={100}
            height={80}
            className="mx-auto mb-[-8%]"
            style={{ height: "auto", width: "auto" }}
          />

          <div className="bg-[#f0efe6] py-6 px-6">
            <h1 className="font-semibold text-2xl my-4">Food And Drinks</h1>
            <p className="pb-8">
              Lorem ipsum dolor sit amet.
              <br />
              sdfds Lorem ipsum dolor sit amet.
              <br />
              Lorem ipsum dolor amet.
            </p>
            <Button
              value="Order Now"
              type="button"
              click={() => {
                router.replace("/pricing");
              }}
            />
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/box.png"
            alt="alt"
            width={80}
            height={80}
            className="mx-auto mb-[-8%]"
            style={{ height: "auto", width: "auto" }}
          />
          <div className="bg-[#f0efe6] py-6 px-6">
            <h1 className="font-semibold text-2xl my-4">Packages</h1>
            <p className="pb-8">
              Lorem ipsum dolor sit amet.
              <br />
              sdfds Lorem ipsum dolor sit amet.
              <br />
              Lorem ipsum dolor amet.
            </p>
            <Button
              value="Order Now"
              type="button"
              click={() => {
                router.replace("/pricing");
              }}
            />
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/groceries.png"
            alt="alt"
            width={100}
            height={80}
            style={{ height: "auto", width: "auto" }}
            className="mx-auto mb-[-8%]"
          />
          <div className="bg-[#f0efe6] py-6 px-6">
            <h1 className="font-semibold text-2xl my-4">Groceries</h1>
            <p className="pb-8">
              Lorem ipsum dolor sit amet.
              <br />
              sdfds Lorem ipsum dolor sit amet.
              <br />
              Lorem ipsum dolor amet.
            </p>
            <Button
              value="Order Now"
              type="button"
              click={() => {
                router.replace("/pricing");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
