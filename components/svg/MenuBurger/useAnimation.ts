import { useEffect, useRef } from "react";
import gsap from "gsap";

const defaults = {
  duration: 0.25,
  ease: "power2.out",
  overwrite: true,
};

export default (active: boolean) => {
  const top = useRef<SVGLineElement>(null);
  const mid = useRef<SVGLineElement>(null);
  const bottom = useRef<SVGLineElement>(null);

  useEffect(() => {
    gsap.to(top.current, {
      ...defaults,
      rotateZ: active ? 45 : 0,
      x: active ? 1 : 0,
      y: active ? 1 : 0,
    });

    gsap.to(mid.current, {
      ...defaults,
      opacity: active ? 0 : 1,
    });

    gsap.to(bottom.current, {
      ...defaults,
      rotateZ: active ? -45 : 0,
      x: active ? 1 : 0,
      y: active ? -1 : 0,
    });
  }, [active]);

  return { top, mid, bottom };
};
