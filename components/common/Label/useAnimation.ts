import { useEffect, useRef } from "react";
import gsap from "gsap";

export default (hasError: boolean) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasError) {
      const defaults = { duration: 0.05 };

      gsap
        .timeline({ defaults })
        .to(ref.current, { duration: 0, opacity: 1 })
        .to(ref.current, { x: -3 })
        .to(ref.current, { x: 3 })
        .to(ref.current, { x: -2 })
        .to(ref.current, { x: 0 });
    } else {
      gsap.to(ref.current, {
        duration: 0.25,
        opacity: 0,
        x: 0,
      });
    }
  }, [hasError]);

  return ref;
};
