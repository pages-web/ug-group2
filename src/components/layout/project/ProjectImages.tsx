import Image from "next/image";

export default function ProjectImages() {
  return (
    <div className="flex flex-col items-center gap-[80px]">
      <div className="relative w-[90vw] overflow-hidden rounded-[20px]">
        <Image
          src="/house.png"
          alt=""
          width={1400}
          height={615}
          className="w-full rounded-[20px] object-contain"
        />
        <div className="absolute left-4 top-4 flex w-full items-center gap-4 rounded bg-opacity-50 px-3 py-1 text-[24px] text-white">
          [Төсөл]
          <div className="h-[1px] w-[90%] bg-white"></div>
          [01]
        </div>
        <div className="absolute bottom-4 left-4 rounded bg-opacity-50 px-3 py-1 text-[24px] text-white">
          Skyline Edge
        </div>
        <div className="absolute bottom-6 right-6 flex gap-[80px] rounded bg-opacity-50 px-3 py-1 text-[24px] text-white">
          <div className="flex items-center justify-center gap-[10px]">
            <Image
              src="/hi.png"
              alt="icon"
              width={19}
              height={19}
              className=""
            />
            <p>Ulaanbaatar, Mongolia</p>
          </div>
          <p>2025</p>
        </div>
      </div>

      <div className="relative w-[90vw] overflow-hidden rounded-[20px]">
        <Image
          src="/caping.png"
          alt=""
          width={1400}
          height={615}
          className="w-full rounded-[20px] object-contain"
        />
        <div className="absolute left-4 top-4 flex w-full items-center gap-4 rounded bg-opacity-50 px-3 py-1 text-[24px] text-white">
          [Төсөл]
          <div className="h-[1px] w-[90%] bg-white"></div>
          [02]
        </div>
        <div className="absolute bottom-4 left-4 rounded bg-opacity-50 px-3 py-1 text-[24px] text-white">
          Forest Haven
        </div>
        <div className="absolute bottom-6 right-6 flex gap-[80px] rounded bg-opacity-50 px-3 py-1 text-[24px] text-white">
          <div className="flex items-center justify-center gap-[10px]">
            <Image
              src="/hi.png"
              alt="icon"
              width={19}
              height={19}
              className=""
            />
            <p>Ulaanbaatar, Mongolia</p>
          </div>
          <p>2024</p>
        </div>
      </div>

      <div className="relative w-[90vw] overflow-hidden rounded-[20px]">
        <Image
          src="/building.png"
          alt=""
          width={1400}
          height={615}
          className="w-full rounded-[20px] object-contain"
        />
        <div className="absolute left-4 top-4 flex w-full items-center gap-4 rounded bg-opacity-50 px-3 py-1 text-[24px] text-white">
          [Төсөл]
          <div className="h-[1px] w-[90%] bg-white"></div>
          [03]
        </div>
        <div className="absolute bottom-4 left-4 rounded bg-opacity-50 px-3 py-1 text-[24px] text-white">
          Horizon Villa
        </div>
        <div className="absolute bottom-6 right-6 flex gap-[80px] rounded bg-opacity-50 px-3 py-1 text-[24px] text-white">
          <div className="flex items-center justify-center gap-[10px]">
            <Image
              src="/hi.png"
              alt="icon"
              width={19}
              height={19}
              className=""
            />
            <p>Ulaanbaatar, Mongolia</p>
          </div>
          <p>2023</p>
        </div>
      </div>

      <div className="relative w-[90vw] overflow-hidden rounded-[20px]">
        <Image
          src="/whatever.png"
          alt=""
          width={1400}
          height={615}
          className="w-full rounded-[20px] object-contain"
        />
        <div className="absolute left-4 top-4 flex w-full items-center gap-4 rounded bg-opacity-50 px-3 py-1 text-[24px] text-white">
          [Төсөл]
          <div className="h-[1px] w-[90%] bg-white"></div>
          [04]
        </div>
        <div className="absolute bottom-4 left-4 rounded bg-opacity-50 px-3 py-1 text-[24px] text-white">
          Quiet Harbor
        </div>
        <div className="absolute bottom-6 right-6 flex gap-[80px] rounded bg-opacity-50 px-3 py-1 text-[24px] text-white">
          <div className="flex items-center justify-center gap-[10px]">
            <Image
              src="/hi.png"
              alt="icon"
              width={19}
              height={19}
              className=""
            />
            <p>Ulaanbaatar, Mongolia</p>
          </div>
          <p>2022</p>
        </div>
      </div>
    </div>
  );
}
