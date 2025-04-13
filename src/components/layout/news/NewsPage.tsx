import Image from "next/image";

export default function NewsPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center py-[50px]">
        <p className="text-[64px]">
          Мэдээ <span className="text-[#00000066]">мэдээлэл</span>
        </p>
      </div>
      <div className="flex items-center justify-between gap-[40px] rounded bg-[#f6f2eb] p-2 px-[5%]">
        <div className="">
          <span className="text-lg text-gray-800">Сүүлийн үеийн мэдээлэл</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="rounded-full bg-[#C79D58] px-4 py-1 text-white">
            Өнөөдөр
          </button>
          <button className="rounded-full border bg-white px-4 py-1 text-[#414545]">
            Энэ 7 хоногт
          </button>
          <button className="rounded-full border bg-white px-4 py-1 text-[#414545]">
            Сүүлийн 1 сар
          </button>
        </div>
      </div>

      <div className="space-y-4 rounded-[20px] bg-white px-[1%] py-4">
        <div className="rounded-[20px] border-4">
          <Image
            src="/eh.png"
            alt="skibidi toilet"
            width={800}
            height={400}
            className="w-full object-cover"
          />
        </div>

        <div className="flex flex-col items-start justify-between px-2 md:flex-row md:items-center">
          <p className="w-[60%] text-[28px] text-[#414545]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <span className="mt-2 text-sm text-[#767777]">26/06/2024</span>
        </div>

        <div className="px-2">
          <a href="#" className="inline-flex items-center text-sm">
            Дэлгэрэнгүй <span className="ml-1"></span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[20px] p-4 px-[5%] sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-between space-y-3 rounded-[20px] bg-white p-4">
          <p className="text-[14px] text-[#767777]">26/06/2024</p>
          <a href="#" className="w-[60%] text-[20px] text-[#414545]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </a>
          <div className="h-[196px] rounded-[12px] bg-[#D9D9D9]"></div>
          <button className="mt-2 flex items-center text-[17px] text-[#767777]">
            Дэлгэрэнгүй
          </button>
        </div>
        <div className="flex flex-col justify-between space-y-3 rounded-[20px] bg-white p-4">
          <p className="text-[14px] text-[#767777]">26/06/2024</p>
          <a href="#" className="w-[60%] text-[20px] text-[#414545]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </a>
          <div className="h-[196px] rounded-[12px] bg-[#D9D9D9]"></div>
          <button className="mt-2 flex items-center text-[17px] text-[#767777]">
            Дэлгэрэнгүй
          </button>
        </div>
        <div className="flex flex-col justify-between space-y-3 rounded-[20px] bg-white p-4">
          <p className="text-[14px] text-[#767777]">26/06/2024</p>
          <a href="#" className="w-[60%] text-[20px] text-[#414545]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </a>
          <div className="h-[196px] rounded-[12px] bg-[#D9D9D9]"></div>
          <button className="mt-2 flex items-center text-[17px] text-[#767777]">
            Дэлгэрэнгүй
          </button>
        </div>
        <div className="flex flex-col justify-between space-y-3 rounded-[20px] bg-white p-4">
          <p className="text-[14px] text-[#767777]">26/06/2024</p>
          <a href="#" className="w-[60%] text-[20px] text-[#414545]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </a>
          <div className="h-[196px] rounded-[12px] bg-[#D9D9D9]"></div>
          <button className="mt-2 flex items-center text-[17px] text-[#767777]">
            Дэлгэрэнгүй
          </button>
        </div>
        <div className="flex flex-col justify-between space-y-3 rounded-[20px] bg-white p-4">
          <p className="text-[14px] text-[#767777]">26/06/2024</p>
          <a href="#" className="w-[60%] text-[20px] text-[#414545]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </a>
          <div className="h-[196px] rounded-[12px] bg-[#D9D9D9]"></div>
          <button className="mt-2 flex items-center text-[17px] text-[#767777]">
            Дэлгэрэнгүй
          </button>
        </div>
        <div className="flex flex-col justify-between space-y-3 rounded-[20px] bg-white p-4">
          <p className="text-[14px] text-[#767777]">26/06/2024</p>
          <a href="#" className="w-[60%] text-[20px] text-[#414545]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </a>
          <div className="h-[196px] rounded-[12px] bg-[#D9D9D9]"></div>
          <button className="mt-2 flex items-center text-[17px] text-[#767777]">
            Дэлгэрэнгүй
          </button>
        </div>
        <div className="flex flex-col justify-between space-y-3 rounded-[20px] bg-white p-4">
          <p className="text-[14px] text-[#767777]">26/06/2024</p>
          <a href="#" className="w-[60%] text-[20px] text-[#414545]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </a>
          <div className="h-[196px] rounded-[12px] bg-[#D9D9D9]"></div>
          <button className="mt-2 flex items-center text-[17px] text-[#767777]">
            Дэлгэрэнгүй
          </button>
        </div>
        <div className="flex flex-col justify-between space-y-3 rounded-[20px] bg-white p-4">
          <p className="text-[14px] text-[#767777]">26/06/2024</p>
          <a href="#" className="w-[60%] text-[20px] text-[#414545]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </a>
          <div className="h-[196px] rounded-[12px] bg-[#D9D9D9]"></div>
          <button className="mt-2 flex items-center text-[17px] text-[#767777]">
            Дэлгэрэнгүй
          </button>
        </div>
        <div className="flex flex-col justify-between space-y-3 rounded-[20px] bg-white p-4">
          <p className="text-[14px] text-[#767777]">26/06/2024</p>
          <a href="#" className="w-[60%] text-[20px] text-[#414545]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </a>
          <div className="h-[196px] rounded-[12px] bg-[#D9D9D9]"></div>
          <button className="mt-2 flex items-center text-[17px] text-[#767777]">
            Дэлгэрэнгүй
          </button>
        </div>
      </div>
    </div>
  );
}
