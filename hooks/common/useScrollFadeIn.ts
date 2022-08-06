import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * @threshold in px
 */
export default (threshold: number, active = false) => {
  const hasPlayedOnce = useRef(false);
  const list = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (active && !hasPlayedOnce.current) {
      const _threshold = threshold - window.innerHeight * 0.7;

      gsap.to(list.current, {
        duration: 0,
        opacity: 0,
      });

      const handleFadeIn = () => {
        const pxNow = document.documentElement.scrollTop;

        if (pxNow >= _threshold) {
          gsap.to(list.current, {
            duration: 0.5,
            ease: "power.out",
            opacity: 1,
            stagger: 0.15,
          });

          hasPlayedOnce.current = true;
          window.removeEventListener("scroll", handleFadeIn);
        }
      };

      handleFadeIn();

      window.addEventListener("scroll", handleFadeIn);
      return () => {
        window.removeEventListener("scroll", handleFadeIn);
      };
    }
  }, [active, threshold]);

  const add = (dom: HTMLElement | null) => {
    dom && list.current.push(dom);
  };

  list.current = [];

  return add;
};
