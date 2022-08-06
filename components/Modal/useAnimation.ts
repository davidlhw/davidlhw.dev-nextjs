import { useEffect, useRef } from "react";
import gsap from "gsap";

export default (active: boolean) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(ref.current, {
      duration: 0.25,
      ease: "power2.out",
      autoAlpha: active ? 1 : 0,
    });
  }, [active]);

  return ref;
};
