import NavLinks from "./NavLinks"; // Import the existing NavLinks component

type Prop = {
  heading: string;
  page:
    | "home"
    | "contact"
    | "about"
    | "service"
    | "partner"
    | "team"
    | "pricing"
    | "blog"
    | "reply"
    | "faq";
};

const NavbarC = ({ heading, page }: Prop) => {
  // Determine the background based on the page prop
  const bgUrl =
    page === "contact"
      ? "/assets/images/ContactBg.jpg"
      : page === "home" || page === "about"
      ? "/assets/images/AboutBg.jpg"
      : page === "partner"
      ? "/assets/images/PartnerBg.jpg"
      : page === "team"
      ? "/assets/images/Grid2.jpg"
      : page === "faq"
      ? "/assets/images/AboutBg.jpg"
      : page === "pricing"
      ? "/assets/images/PricingBg.jpg"
      : page === "blog"
      ? "/assets/images/BlogBg.jpg"
      : page === "reply"
      ? "/assets/images/ContactBg.jpg"
      : "/assets/images/ServiceBg.jpg";

  return (
    <div
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "full",
        width: "auto",
      }}
    >
      <div
        style={{ backgroundColor: "rgba(37, 49, 56, 0.85)" }}
        className="py-8 px-4 md:py-8 md:pb-20 md:px-8"
      >
        {/* Reusing NavLinks component */}
        <NavLinks />

        {/* Main Heading Section */}
        <div className="flex justify-center text-center mt-6 items-center text-white ">
          <div className="text-lg">
            <h1 className="font-bold text-5xl my-5">{heading}</h1>
            <p className="tracking-tight text-lg text-wrap w-fit mx-auto my-8">
              Molestias sunt ea vel distinctio ea vel distinctio libe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarC;
