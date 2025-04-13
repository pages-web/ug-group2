export default function Herod({ title1, title2, desc }: any) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center py-[50px]">
        <p className="text-[64px]">
          {title1} <span className="text-[#00000066]">{title2}</span>
        </p>
        <p className="w-[50vw] text-center">{desc}</p>
      </div>
    </div>
  );
}
