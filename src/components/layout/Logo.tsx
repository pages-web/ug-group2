"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("relative w-auto", className)}>
      <Link
        href={"/"}
        className={cn("flex h-full items-center gap-x-1 sm:gap-x-3")}
      >
        {/* <Image
          src={"/assets/aboutMinepro/logo2.svg"}
          width={125}
          height={30}
          alt="Logo"
          className="object-cover object-center"
        />
        <Image
          src={"/assets/minepro-logo/logos-1.svg"}
          alt="Logo"
          className="object-cover object-center"
          width={120}
          height={30}
        /> */}
        {/* <Image
          src={"/assets/minepro-logo/Logo.svg"}
          alt="Logo"
          className="object-cover object-center"
          width={668}
          height={82}
        /> */}
        <img
          src="/assets/logo11.png"
          className="h-[94px] object-contain"
          alt=""
        />
      </Link>
    </div>
  );
};
