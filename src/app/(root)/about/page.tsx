import AboutChecklist from "@/components/layout/about/AboutChecklist";
import AboutDescription from "@/components/layout/about/AboutDescription";
import AboutHero from "@/components/layout/about/AboutHero";
import AboutText from "@/components/layout/about/AboutText";
import Responsibility from "@/components/Responsibility";

const AboutPage = () => {
  return (
    <div className="item-center justify-centers flex w-full flex-col">
      <AboutHero />
      <AboutDescription />
      <AboutChecklist />
      <AboutText />
      <Responsibility />
    </div>
  );
};

export default AboutPage;
