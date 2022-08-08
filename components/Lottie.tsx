// https://www.npmjs.com/package/lottie-web
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Lottie from "lottie-web";
import gsap from "gsap";

import config from "config";

const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  background: var(--bg);
  opacity: 0.3;
`;

const Player = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  aspect-ratio: 1/1;
  height: auto;
  width: 30%;
  max-width: 150px;
`;

// https://stackoverflow.com/questions/69282996/lottie-files-reducing-performance-on-nextjs-app
export default ({
  renderLottie,
  setRenderLottie,
  setAllowScroll,
}: {
  renderLottie: boolean;
  setRenderLottie: (b: boolean) => void;
  setAllowScroll: (b: boolean) => void;
}) => {
  const mask = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const l = Lottie.loadAnimation({
      container: ref.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: config.lottie.path,
    });

    return () => l.destroy();
  }, []);

  useEffect(() => {
    if (renderLottie) {
      gsap.to(mask.current, {
        duration: 0,
        autoAlpha: 1,
      });

      const t = setTimeout(() => {
        setAllowScroll(true);

        gsap.to(mask.current, {
          duration: 1,
          ease: "power2.out",
          autoAlpha: 0,
          onComplete: () => setRenderLottie(false),
        });
      }, config.lottie.duration);

      return () => {
        clearTimeout(t);
      };
    } else {
      gsap.to(mask.current, {
        duration: 0,
        autoAlpha: 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderLottie]);

  return (
    <Mask ref={mask}>
      <Player ref={ref} />
    </Mask>
  );
};
