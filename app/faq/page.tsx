"use client";
import Image from "next/image";
const Button = dynamic(() => import("../components/Button"), { ssr: false });
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import NavbarC from "../components/NavbarC";

import FaqQuestion from "../components/FaqList";
import NewsLetter from "../components/NewsLetter";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className="overflow-x-hidden">
      <NavbarC heading="FAQ" page="faq" />
      <div className="flex justify-center items-center text-center flex-col my-12">
        <h1 className="text-4xl font-bold my-12">Do You Need Help?</h1>
        <div>
          <div className="flex justify-center md:flex-row flex-col-reverse md:gap-5 lg:gap-12 items-center text-center md:text-start">
            <div className="md:text-base text-lg lg:text-lg mx-4">
              <h1 className="font-bold lg:text-4xl text-4xl md:text-2xl my-5 md:my-3y lg:my-5">
                Get In Touch
              </h1>
              <p className="tracking-tighter text-wrap max-w-[35rem]  my-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elitsadaa
                olsa Lorem ipsum, dolor sit amet consectetur adipisicing
                elitsadaa olsa libero necessitatibus reiciendis ipsamre iciendis
                ipsam sdsadsa sads. necessitatibus reiciendis ip ipsam.
              </p>

              <Button
                value="Contact Us"
                type="button"
                click={() => {
                  router.replace("/contact");
                }}
              />
            </div>
            <div className="">
              <Image
                src="/assets/images/Faq.png"
                alt="Not Available"
                width={400}
                height={400}
                priority
                style={{ height: "auto", width: "auto" }}
              />
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold my-12">General Questions</h1>
        <div className="flex justify-center md:flex-row flex-col items-stretch max-w-[62%] mx-auto gap-8 my-12">
          <div>
            <FaqQuestion
              question="How to Change my Photo from Admin Dashboard?"
              answer="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
            />
            <FaqQuestion
              question="How to Change my Password Easily?"
              answer="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
            />
            <FaqQuestion
              question="How to Change my Subscription Plan Using Paypal?"
              answer="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
            />
          </div>
          <div>
            <FaqQuestion
              question="How to Change my Photo from Admin Dashboard?"
              answer="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
            />
            <FaqQuestion
              question="How to Change my Password Easily?"
              answer="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
            />
            <FaqQuestion
              question="How to Change my Subscription Plan Using Paypal?"
              answer="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
            />
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default page;
