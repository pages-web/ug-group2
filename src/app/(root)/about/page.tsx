import Herod from "@/components/Herod";
import AboutChecklist from "@/components/layout/about/AboutChecklist";
import AboutDescription from "@/components/layout/about/AboutDescription";
import AboutHero from "@/components/layout/about/AboutHero";

import Responsibility from "@/components/Responsibility";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="item-center flex w-full flex-col justify-center">
      <Herod
        title1="Бидний"
        title2="тухай"
        desc="  Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen
          book."
      />
      <div className="flex w-full justify-center">
        <Image
          src="/city.png"
          alt=""
          width={1400}
          height={615}
          className="w-[90vw] rounded-[20px] object-contain"
        />
      </div>
      <AboutDescription />
      <AboutChecklist />
      <Responsibility />
    </div>
  );
};

export default AboutPage;
