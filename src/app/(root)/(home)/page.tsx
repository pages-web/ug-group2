import About from "@/components/About";
import Hero from "@/components/Hero";
import Responsibility from "@/components/Responsibility";

const HomePage = () => {
  return (
    <div className="item-center justify-centers flex w-full flex-col">
      <Hero />
      <About />
      <Responsibility />
    </div>
  );
};

export default HomePage;
