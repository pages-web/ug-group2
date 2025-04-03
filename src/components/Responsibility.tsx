import Image from "next/image";

export default function Responsibility() {
  const data = [
    {
      icon: "/assets/mini.png",
      id: 1,
      img: "https://t4.ftcdn.net/jpg/06/30/07/45/360_F_630074576_zAfkSUjdGAigHB3t3RORcQSP76Dau719.jpg",
      text: "Бидний алсын хараа",
      desc: "Нийт үйлчлүүлэгч, хамтрагч, харилцагч, хэрэглэгч, ажиллагсадтайгаа хамтын үнэ цэнээ бүтээж, Монгол улсын шилдэг 10 компанийн эгнээнд багтах цаашлаад үйлчилгээний",
    },
    {
      icon: "/assets/solid.png", // Ensure this exists in /public/assets
      id: 2,
      img: "https://t4.ftcdn.net/jpg/06/30/07/45/360_F_630074576_zAfkSUjdGAigHB3t3RORcQSP76Dau719.jpg",
      text: "Бидний эрхэм зорилго",
      desc: "Бидний хувьд 'Аз жаргалыг хамтдаа бүтээе' уриа нь дор нийгэм, хүүхэд залууст чиглэсэн спорт, энтертайнмент нэг дор төвлөрсөн томоохон бүтээн байгуулалтыг жил бүр",
    },
    {
      icon: "/assets/trophy.png",
      id: 3,
      img: "https://t4.ftcdn.net/jpg/06/30/07/45/360_F_630074576_zAfkSUjdGAigHB3t3RORcQSP76Dau719.jpg",
      text: "Бидний үнэт зүйл",
      desc: "Нийт ажилтнуудыг компанийн үнэт зүйл хэмээн үзэж “Ажилтан бүр эрхэм” уриа нь дор хүний нөөцийн бодлогоо хэрэгжүүлэн ажиллаж байна.",
    },
  ];

  return (
    <div className="mt-[50px] flex w-full justify-center">
      <div className="flex w-[90%] justify-between gap-12">
        {data.map((post) => (
          <div
            key={post.id}
            className="flex h-[400px] flex-col justify-between rounded-[20px] bg-white p-[12px] shadow-md"
          >
            <div className="flex gap-[10px]">
              <Image
                src={post.icon}
                width={20}
                height={20}
                alt="eyes"
                className="object-contain"
              />
              <p className="text-[24px] font-semibold">{post.text}</p>
            </div>
            <div>
              <p className="text-[14px] text-[#414545]">{post.desc}</p>
              <div className="mt-2 h-[173px] w-full rounded-[20px] bg-[#D9D9D9]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
