import { useEffect, useRef } from "react";
import gsap from "gsap";

export default () => {
  const hover = useRef<HTMLSpanElement>(null);
  const target = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const mouseOver = () => {
      gsap.to(target.current, {
        duration: 0.08,
        ease: "power2.out",
        scaleX: 1,
        overwrite: true,
      });
    };

    const mouseOut = () => {
      gsap.to(target.current, {
        duration: 0.08,
        ease: "power2.out",
        scaleX: 0,
        overwrite: true,
      });
    };

    const current = hover.current;

    current?.addEventListener("mouseover", mouseOver);
    current?.addEventListener("mouseout", mouseOut);

    return () => {
      current?.removeEventListener("mouseover", mouseOver);
      current?.removeEventListener("mouseout", mouseOut);
    };
  }, []);

  return { hover, target };
};
