import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";

import useViewportStore from "stores/useViewportStore";
import useTimelineStore from "stores/useTimelineStore";
import useModalStore from "stores/useModalStore";

export default () => {
  const { route } = useRouter();

  const hasPlayedOnce = useRef(false);

  const master = useRef(gsap.timeline().pause());
  const header = useTimelineStore((state) => state.header);
  const intro = useTimelineStore((state) => state.intro);
  const setAnimateIdentity = useTimelineStore(
    (state) => state.setAnimateIdentity
  );

  const md = useViewportStore((state) => state.md);
  const modalActive = useModalStore((state) => state.active);

  useEffect(() => {
    const current = master.current;
    md && header && current.add(header());
    intro && current.add(intro());

    if (modalActive && !hasPlayedOnce.current) current.seek(0).pause();
    else if (route === "/" && !hasPlayedOnce.current && (header || intro)) {
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
  }, [header, intro, route, modalActive]);
};
