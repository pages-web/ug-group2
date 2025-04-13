import Image from "next/image";

export default function BisunessBorders() {
  const Tsukasa = [
    {
      id: 1,
      img: "/arena.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      id: 1,
      img: "/Gan.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      id: 1,
      img: "/Ulongue.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      id: 1,
      img: "/Dem.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      id: 1,
      img: "/UGinn.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      id: 1,
      img: "/UGauto.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      id: 1,
      img: "/UgPalace.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      id: 1,
      img: "/UGballroom.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      id: 1,
      img: "/UGexpo.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      id: 1,
      img: "/UGfinance.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
  ];

  return (
    <div className="mt-[50px] flex w-full justify-center">
      <div className=" grid w-[90%] grid-cols-1 gap-6 gap-[120px] sm:grid-cols-2">
        {Tsukasa.map((post) => (
          <div key={post.id} className="">
            <div className="flex flex-col items-start">
              <Image
                src={post.img}
                alt="Business Vision"
                height={100}
                width={100}
                className="h-[50px] rounded-md object-contain"
              />
              <p className="mt-3 text-start text-gray-700">{post.desc}</p>
              <div className="mt-4 flex gap-[24px] text-[#414545] ">
                <div className="flex gap-[10px]">
                  <Image
                    src="/phone.png"
                    alt=""
                    height={16}
                    width={16}
                    className="rounded-md object-contain"
                  />
                  <p>+976 77712111</p>
                </div>
                <div className="flex gap-[10px]">
                  <Image
                    src="/mini.png"
                    alt=""
                    height={16}
                    width={16}
                    className="rounded-md object-contain"
                  />
                  <p>marketing@urangan.mn</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
