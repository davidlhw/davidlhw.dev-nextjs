import create from "zustand";

type StoreSchema = {
  active: boolean;

  open: () => void;
  close: () => void;
};

export default create<StoreSchema>((set) => ({
  active: false,
  open: () => set({ active: true }),
  close: () => set({ active: false }),
}));
