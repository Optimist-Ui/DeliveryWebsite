import CallUs from "./components/CallUs";
import Carousel from "./components/Carousel";
import Crew from "./components/Crew";
import Delivery from "./components/Delivery";
import Footer from "./components/Footer";
import ItemList from "./components/ItemList";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <CallUs />
      <Service />
      <ItemList />
      <Crew />
      <Delivery />
      <Testimonial />
      <Carousel />
      <NewsLetter />
      <Footer />
    </div>
  );
}
