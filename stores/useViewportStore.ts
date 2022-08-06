import create from "zustand";
import type { Viewport } from "config/viewport";

type StoreSchema = { [v in keyof Viewport]: boolean } & {
  setVp: (k: keyof Viewport, b: boolean) => void;
};

export default create<StoreSchema>((set) => ({
  sm: false,
  md: false,
  lg: false,
  xl: false,

  setVp: (k, b) =>
    set((state) => {
      const clone = { ...state };
      clone[k] = b;

      return clone;
    }),
}));
