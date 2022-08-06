import { useEffect, useRef } from "react";
import gsap from "gsap";

const defaults = {
  duration: 0.25,
  ease: "power2.out",
};

export default (expand: boolean, md: boolean) => {
  const dropdown = useRef<HTMLDivElement>(null);
  const mask = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(dropdown.current, {
      ...defaults,
      rotateX: expand && !md ? 0 : 40,
      autoAlpha: expand && !md ? 1 : 0,
    });

    gsap.to(mask.current, {
      ...defaults,
      autoAlpha: expand && !md ? 1 : 0,
    });
  }, [expand, md]);

  return { dropdown, mask };
};
