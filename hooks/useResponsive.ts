import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import config from "config";
import useViewportStore from "stores/useViewportStore";

export default () => {
  const setVp = useViewportStore((state) => state.setVp);

  const sm = useMediaQuery({ minWidth: config.viewport.sm });
  const md = useMediaQuery({ minWidth: config.viewport.md });
  const lg = useMediaQuery({ minWidth: config.viewport.lg });

  useEffect(() => {
    setVp("sm", sm);
    setVp("md", md);
    setVp("lg", lg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sm, md, lg]);
};
