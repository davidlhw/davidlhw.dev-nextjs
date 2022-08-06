import { useEffect, useRef } from "react";
import gsap from "gsap";

export default ({
  identity,
  onComplete,
  active = true,
}: {
  identity: string;
  onComplete: () => void;
  active?: boolean;
}) => {
  const ref = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (active) {
      const tl = gsap
        .timeline()
        .delay(0.5)
        .eventCallback("onComplete", onComplete);

      ref.current.forEach((dom) => {
        tl.to(dom, {
          delay: Math.random() * 0.2 + 0.05,
          duration: 0,
          display: "block",
        });
      });

      tl.to(
        [...ref.current].reverse(),
        {
          duration: 0,
          display: "none",
          stagger: 0.05,
        },
        "<+=1.5"
      );

      return () => {
        tl.kill();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [identity, active]);

  const add = (dom: HTMLElement | null) => {
    dom && ref.current.push(dom);
  };

  ref.current = [];

  return add;
};
