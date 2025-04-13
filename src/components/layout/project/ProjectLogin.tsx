import Image from "next/image";

export default function ProjectLogin() {
  return (
    <div className="flex justify-between px-[150px] py-[80px]">
      <div className="">
        <Image
          src="/cabinet.png"
          alt="Image"
          width={810}
          height={560}
          className="rounded-[20px] object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center p-10">
        <div className="w-full space-y-6">
          <p className="text-[20px]">
            Манай борлуултын албатай холбогдож зөвөлгөө мэдээлэл аваарай.
          </p>
          <input
            type="text"
            placeholder="Таны нэр"
            className="w-full rounded-full border border-gray-500 bg-transparent px-5 py-3 placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="+976 (------ ------ ----)"
            className="w-full rounded-full border border-gray-500 bg-transparent px-5 py-3 placeholder-gray-400"
          />
          <button className="flex w-full items-center justify-center space-x-2 rounded-full bg-yellow-600 py-3 text-white">
            <span>Цаг захиалах</span>
            <Image src="/arrows.png" alt="Arrow" width={19} height={19} />
          </button>
          <div className="flex gap-[10px]">
            <Image
              src="/WARNING.png"
              alt=""
              width={19}
              height={19}
              className=""
            />
            <p className="flex items-start text-sm text-gray-400">
              Товчлуур дээр дарснаар та хувийн мэдээллийг боловсруулахыг
              зөвшөөрч байна.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
