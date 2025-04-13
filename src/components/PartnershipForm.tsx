import Image from "next/image";

export default function PartnershipForm() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex h-[screen] w-[90%] gap-[20px] ">
        <div className="flex h-[85vh] w-[50%] flex-col items-center gap-4 rounded-[20px] bg-white p-[60px]">
          <p>Маркетингийн албатай холбогдох</p>
          <div className="flex w-[100%] flex-col gap-3 ">
            <p className="px-4 text-[16px]">Нэр</p>
            <input
              type="text"
              placeholder="Утга оруулна уу"
              className="rounded-full bg-[#f7f2e8] p-4"
            />
          </div>
          <div className="flex w-[100%] flex-col gap-3 ">
            <p className="px-4 text-[16px]">Нэр</p>
            <input
              type="text"
              placeholder="Утга оруулна уу"
              className="rounded-full bg-[#f7f2e8] p-4"
            />
          </div>
          <div className="flex w-[100%] flex-col gap-3">
            <p className="px-4 text-[16px]">Эмайл</p>
            <input
              type="text"
              placeholder="you@company.com"
              className="rounded-full bg-[#f7f2e8] p-4"
            />
          </div>
          <div className="flex w-[100%] flex-col gap-3">
            <p className="px-4 text-[16px]">Утас</p>
            <input
              type="text"
              placeholder="+976 **** ****"
              className="rounded-full bg-[#f7f2e8] p-4"
            />
          </div>
          <div className="flex w-[100%] flex-col gap-3">
            <p className="px-4 text-[16px]">Сэдэв</p>
            <input
              type="text"
              placeholder="Утга оруулна уу"
              className="rounded-full bg-[#f7f2e8] p-4"
            />
          </div>
          <div className="flex w-[100%] flex-col gap-3">
            <p className="px-4 text-[16px]">Мессэж</p>
            <textarea
              className="flex items-start rounded-[20px] bg-[#f7f2e8] p-4"
              placeholder="Мессэж үлдээх"
            ></textarea>
          </div>
          <button className="w-full rounded-full bg-[#C79D58] py-[11px] text-white">
            Илгээх
          </button>
        </div>
        <div className="flex h-[85vh] w-[50%] flex-col items-center justify-between">
          <div className="flex flex-col gap-[30px]">
            <div className="">
              <p className="text-[20px] font-[600]">Борлуулалтын алба</p>
              <p>
                Таньд хамтрах ажил байна уу? Манай найрсаг хамт олонлуу
                холбогдоорой.
              </p>
            </div>
            <p className="text-[16px] text-[#414545]">Sales@urangan.com</p>
            <div className="h-[1px] w-full bg-black/20"> </div>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="">
              <p className="text-[20px] font-[600]">Email</p>
              <p>
                Бидэнд имэйл илгээвэл бид тантай 24 цагийн дотор эргэн холбогдох
                болно.
              </p>
            </div>
            <p className="text-[16px] text-[#414545]">support@urangan.com</p>
            <div className="h-[1px] w-full bg-black/20"> </div>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="">
              <p className="text-[20px] font-[600]">Утас</p>
              <p>Mon - Fri, 09:00 AM - 5:00 PM (UTC/GMT + 8:00)</p>
            </div>
            <p className="text-[16px] text-[#414545]">+976 72131842</p>
            <p className="text-[16px] text-[#414545]">+976 72152362</p>
            <div className="h-[1px] w-full bg-black/20"> </div>
          </div>

          <div className="flex flex-col gap-[30px]">
            <div className="">
              <p className="text-[20px] font-[600]">Ulaanbaatar, Mongolia</p>
              <p>Visit our office Mon - Fri, 09:00 AM - 05:00 PM</p>
            </div>
            <div className="flex gap-[10px]">
              <Image
                src="/blablabla.png"
                alt=""
                width={20}
                height={20}
                className="object-contain"
              />
              <p className="text-[16px] text-[#414545]">
                Bayangol district, 3 khoroo, Teewerchid street, Ulaanbaatar,
                Mongolia
              </p>
            </div>
            <div className="h-[1px] w-full bg-black/20"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}
