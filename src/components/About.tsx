import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function About() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-[50%] flex-col  items-center">
        <div className="text-center text-[52px] text-black">
          Modular, Sustainable <br />
          Pods. Installed By Experts. Designed <br />
          <span className="text-[#C79D58]">Just For You.</span>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="w-[40%] text-justify">
            Уранган ХХК нь 1996 онд гагнуур, токарь, нимгэн төмөр үйлдвэрлэл,
            бүх төрлийн цахилгаан хөдөлгүүрийн ороолт засвар зэрэг үйлдвэрлэл,
            засварын чиглэлд үйл ажиллагаагаа эхэлж байсан ба 28 жилийн
            хугацаанд Монгол Улсынхаа хөгжил цэцэглэлт, бүтээн байгуулалтуудад
            гар бие оролцон, шинэ салбаруудад хүч түрэн орсоор байна. “Уранган”
            ХХК нь 2021 оноос групп компани болон өргөжиж нийт 9 салбарт үйл
            ажиллагаагаа өргөжүүлэн ажиллаж байна. 
          </div>
          <div className="flex items-center">
            Дэлгэрэнгүй <IoIosArrowForward />
          </div>
        </div>
        <Image
          src="/home/image.png"
          alt=""
          width={445}
          height={228}
          className="rounded-[20px]"
        />
      </div>
    </div>
  );
}
