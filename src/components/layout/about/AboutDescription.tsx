import Image from "next/image";

export default function AboutDescription() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-[30px]">
      <Image
        src="/vector.png"
        alt=""
        width={59}
        height={75}
        className="object-contain"
      />
      <p className="flex text-center text-[26px] text-[#414545]">
        Уранган ХХК нь 1996 онд гагнуур, токарь, нимгэн төмөр үйлдвэрлэл, бүх{" "}
        <br />
        төрлийн цахилгаан хөдөлгүүрийн ороолт засвар зэрэг үйлдвэрлэл,
        <br />
        засварын чиглэлд үйл ажиллагаагаа эхэлж байсан ба 28 жилийн <br />
        хугацаанд Монгол Улсынхаа хөгжил цэцэглэлт, бүтээн байгуулалтуудад{" "}
        <br />
        гар бие оролцон, шинэ салбаруудад хүч түрэн орсоор байна. <br />
        “Уранган” ХХК нь 2021 оноос групп компани болон өргөжиж нийт 9 <br />
        салбарт үйл ажиллагаагаа өргөжүүлэн ажиллаж байна. 
      </p>
    </div>
  );
}
