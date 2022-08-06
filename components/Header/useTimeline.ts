import { useEffect, useRef } from "react";
import gsap from "gsap";

import useTimelineStore from "stores/useTimelineStore";

export default (active = true) => {
  const setTimeline = useTimelineStore((state) => state.setHeader);

  const list = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (!active) setTimeline(undefined);
    else {
      setTimeline(() => {
        const tl = gsap.timeline();

        tl.fromTo(
          list.current,
          {
            autoAlpha: 0,
            y: -10,
          },
          {
            duration: 0.5,
            ease: "power2.out",
            autoAlpha: 1,
            y: 0,
            stagger: 0.1,
            // overwrite: true
          }
        );

        return tl;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const add = (dom: HTMLElement | null) => {
    dom && list.current.push(dom);
  };

  list.current = [];

  return { add };
};
