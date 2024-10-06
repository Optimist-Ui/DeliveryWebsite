import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaWikipediaW,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#253138] text-white py-12">
      <Image
        src={"/assets/images/Navbar-logo.png"}
        alt="Not Available"
        width={180}
        height={100}
        className="lg:ml-[20%] mx-auto"
        style={{ height: "auto", width: "auto" }}
      />
      <div className="list-none flex md:flex-row flex-col justify-center md:text-start text-center flex-wrap gap-28 text-lg py-12">
        <div>
          <h1 className="font-bold text-xl py-4">Company</h1>
          <li className="text-[#dedddd]">About</li>
          <li className="text-[#dedddd]">Product</li>
          <li className="text-[#dedddd]">Blog</li>
        </div>
        <div>
          <h1 className="font-bold text-xl py-4">Join Us</h1>
          <li className="text-[#dedddd]">Driver Partner</li>
          <li className="text-[#dedddd]">Merchant</li>
        </div>
        <div>
          <h1 className="font-bold text-xl py-4">Career</h1>
          <li className="text-[#dedddd]">Internship</li>
          <li className="text-[#dedddd]">Professional</li>
        </div>
        <div>
          <h1 className="font-bold text-xl py-4">Further Information</h1>
          <li className="text-[#dedddd]">Terms & Condition</li>
          <li className="text-[#dedddd]">Privacy Policy</li>
        </div>
        <div>
          <h1 className="font-bold text-xl py-4">Find Us</h1>
          <div className="flex items-center justify-center gap-4">
            <Link href={"#"}>
              <FaFacebookF size={25} />
            </Link>
            <Link href={"#"}>
              <FaTwitter size={25} />
            </Link>
            <Link href={"#"}>
              <FaYoutube size={25} />
            </Link>
            <Link href={"#"}>
              <FaWikipediaW size={25} />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center text-[#dedddd]">
        Copyright © 2024 delivey | Powered by delivey
      </p>
    </div>
  );
};

export default Footer;
