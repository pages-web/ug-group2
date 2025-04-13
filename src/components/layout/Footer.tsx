import Image from "next/image";

export const Footer = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="px [5%] mx-[20px] mt-[40px] flex w-[100%] flex-col items-center justify-center rounded-[23px]  bg-white pt-[34px]">
        <div className="flex w-[90%] justify-between ">
          <div className="flex flex-col gap-[17px]">
            <Image
              src="/Urangan.png"
              alt=""
              width={152}
              height={81}
              className=""
            />
            <p className="text-[14px] text-[#414545]">
              Монголын тэргүүлэгч барилгын компани.
            </p>
          </div>
          <div className="flex w-[40%] justify-between">
            <div className="w-[30%] flex-col">
              <p className="text-[18px]">Address</p>
              <p className="text-[14px]">
                "Urangan LLC" on the bank of the Dund River, 3rd khoroo, BGD
              </p>
            </div>
            <div className="w-[30%] flex-col">
              <p className="text-[18px]">Industry companies</p>
              <p className="text-[14px]">UG Arena</p>
              <p className="text-[14px]">UG Palace</p>
              <p className="text-[14px]">UG Inn</p>
              <p className="text-[14px]">UG Expo</p>
              <p className="text-[14px]">Gan Sport center</p>
            </div>
            <div className="w-[30%] flex-col">
              <p className="text-[18px]">Social</p>
              <p className="text-[14px]">Instagram</p>
              <p className="text-[14px]">Facebook</p>
              <p className="text-[14px]">Twitter</p>
              <p className="text-[14px]">Youtube</p>
            </div>
          </div>
        </div>
        <div className="w-[100%]">
          <div className="text-[60px] text-[#767777]">INFO@URANGAN.COM</div>
          <div className="flex justify-center gap-[20px] px-[2%] py-[32px]">
            <div className="flex h-[60px] w-[30%] items-center rounded-full bg-[#F4F4F4] text-[20px] text-[#767777]">
              +976-70044721
            </div>
            <div className="flex h-[60px] w-[30%] items-center rounded-full bg-[#F4F4F4] text-[20px] text-[#767777]">
              +976-70044721
            </div>
            <div className="flex h-[60px] w-[30%] items-center justify-center rounded-full bg-[#C79D58] text-[20px] text-white">
              Бидэнтэй холбогдох
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
