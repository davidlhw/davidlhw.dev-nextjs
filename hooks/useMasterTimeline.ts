import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";

import useViewportStore from "stores/useViewportStore";
import useTimelineStore from "stores/useTimelineStore";
import useModalStore from "stores/useModalStore";

export default (
  renderLottie: boolean,
  setRenderLottie: (b: boolean) => void,
  setAllowScroll: (b: boolean) => void
) => {
  const router = useRouter();

  const hasPlayedOnce = useRef(false);

  const master = useRef(gsap.timeline().pause());
  const header = useTimelineStore((state) => state.header);
  const intro = useTimelineStore((state) => state.intro);
  const setAnimateIdentity = useTimelineStore(
    (state) => state.setAnimateIdentity
  );
  const md = useViewportStore((state) => state.md);
  const modalActive = useModalStore((state) => state.active);

  const [r, setR] = useState("");

  useEffect(() => {
    setR((prev) => {
      if (router.asPath.includes("#") || router.route !== "/") {
        setRenderLottie(false);
        setAllowScroll(true);
      } else if (prev !== router.route) {
        setRenderLottie(true);
        setAllowScroll(false);

        hasPlayedOnce.current = false;
      }

      return router.route;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  useEffect(() => {
    const current = master.current;
    if (md && header) {
      current.add(header());
    }

    if (intro) {
      current.add(intro());
    }

    if ((modalActive && !hasPlayedOnce.current) || renderLottie)
      current.seek(0).pause();
    else if (
      r === "/" &&
      !hasPlayedOnce.current &&
      (header || intro) &&
      !renderLottie
    ) {
      setAnimateIdentity(false);
      current.seek(-0.5).play();
      hasPlayedOnce.current = true;
    } else {
      current.progress(1);
    }

    return () => {
      current.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [header, intro, r, modalActive, renderLottie]);
};
