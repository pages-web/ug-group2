import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [isTop, setIsTop] = useState(true);

  const pathName = usePathname();

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 50) {
        setIsTop(false);
        if (scrollTop > prevScrollY) {
          setScrollDirection("up");
        } else {
          setScrollDirection("down");
        }
      } else {
        setIsTop(true);
      }

      prevScrollY = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrollDirection]);

  // Use the pathName to trigger setScrollDirection("up") when the pathname changes.

  useEffect(() => {
    setScrollDirection("up");
  }, [pathName, setScrollDirection]);

  return { scrollDirection, isTop };
};

export default useScrollDirection;
