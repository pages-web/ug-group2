"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const router = useRouter();

  return (
    <div className="">
      <div className="flex w-full justify-between  px-[4%] py-[20px]">
        <div className="flex w-[75%] justify-between rounded-full bg-white px-[24px]">
          <div className="flex items-center justify-center gap-[16px] ">
            <Link href="/">
              <Image
                src="/home/Vector.png"
                alt=""
                width={75}
                height={40}
                className="object-contain"
              />
            </Link>
            <div className="h-[40px] w-[1px] bg-gray-500"></div>
            <div className="text-end">EN</div>
          </div>
          <div className="flex h-[68px] items-center justify-center justify-between gap-[20px] rounded-[100px] rounded-full px-[24px] py-[15px]">
            <Link href="/about">
              <p>Компани</p>
            </Link>
            <Link href="">
              <p>Төсөл</p>
            </Link>
            <Link href="/bisuness">
              <p>Бизнес салбар</p>
            </Link>
            <Link href="">
              <p>Нийгмийн хариуцлага</p>
            </Link>
            <Link href="">
              <p>Хүний нөөц</p>
            </Link>
            <Link href="">
              <p>Мэдээ</p>
            </Link>
          </div>
        </div>
        <div className="flex h-[68px] w-[24%] items-center  justify-center rounded-[100px] bg-[#C79D58] text-white">
          Хамтран ажиллах
        </div>
      </div>
    </div>
  );
};
