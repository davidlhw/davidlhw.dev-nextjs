import { useEffect, useRef } from "react";
import gsap from "gsap";

export default ({
  onComplete,
  active = true,
}: {
  onComplete: () => void;
  active?: boolean;
}) => {
  const ref = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (active) {
      const tl = gsap.timeline();

      tl.eventCallback("onComplete", onComplete);

      ref.current.forEach((dom) => {
        tl.to(dom, {
          delay: Math.random() * 0.08 + 0.01,
          duration: 0,
          display: "block",
        });
      });

      return () => {
        tl.kill();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const add = (dom: HTMLElement | null) => {
    dom && ref.current.push(dom);
  };

  ref.current = [];

  return add;
};
