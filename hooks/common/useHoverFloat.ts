import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const current = ref.current;

    const float = () => {
      gsap.to(current, {
        duration: 0.25,
        ease: "power2.out",
        scale: 1.03,
      });
    };

    const descend = () => {
      gsap.to(current, {
        duration: 0.25,
        ease: "power2.out",
        scale: 1,
      });
    };

    current?.addEventListener("mouseover", float);
    current?.addEventListener("mouseout", descend);

    return () => {
      current?.removeEventListener("mouseover", float);
      current?.removeEventListener("mouseout", descend);
    };
  }, []);

  return ref;
};
