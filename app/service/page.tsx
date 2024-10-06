import CallUs from "../components/CallUs";
import Footer from "../components/Footer";
import Mobile from "../components/Mobile";
import NavbarC from "../components/NavbarC";
import NewsLetter from "../components/NewsLetter";
import Service from "../components/Service";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <NavbarC page="service" heading="Service" />
      <CallUs />
      <Service />
      <Mobile />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default page;
