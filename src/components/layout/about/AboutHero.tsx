import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center py-[50px]">
        <p className="text-[64px]">
          Бидний <span className="text-[#00000066]">тухай</span>
        </p>
        <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard <br />
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen <br />
          book.
        </p>
      </div>
      <Image
        src="/city.png"
        alt=""
        width={1400}
        height={615}
        className="w-[90vw] rounded-[20px] object-contain"
      />
    </div>
  );
}
