import create from "zustand";

type StoreSchema = {
  header: (() => GSAPTimeline) | undefined;
  setHeader: (fn: (() => GSAPTimeline) | undefined) => void;

  intro: (() => GSAPTimeline) | undefined;
  setIntro: (fn: (() => GSAPTimeline) | undefined) => void;

  animateIdentity: boolean;
  setAnimateIdentity: (b: boolean) => void;
};

export default create<StoreSchema>((set) => ({
  header: undefined,
  setHeader: (h) => set(() => ({ header: h })),

  intro: undefined,
  setIntro: (i) => set(() => ({ intro: i })),

  animateIdentity: false,
  setAnimateIdentity: (b) => set(() => ({ animateIdentity: b })),
}));
