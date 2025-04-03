import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="my-[30px] flex w-[95%] justify-between gap-[177px] rounded-lg bg-white px-[5%] py-[20px]">
        <div className="flex flex-col justify-between">
          <div className="text-[60px] text-[#C79D58]">
            Leading <br />
            Construction <br />
            Company
          </div>
          <div className="text-[14px]">
            БИД МАНЛАЙЛАЛ, ТҮНШЛЭЛ, ИНОВАЦИАР БҮТЭЭГДСЭН ЧАНАРЫН ДЭЭДИЙГ <br />
            ХАРИЛЦАГЧ, ХЭРЭГЛЭГЧДЭДЭЭ ХҮРГЭНЭ.
          </div>
        </div>
        <Image
          src="/home/floor.png"
          alt=""
          width={635}
          height={538}
          className="rounded-[20px] object-contain"
        />
      </div>
    </div>
  );
}
