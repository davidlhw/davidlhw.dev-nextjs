import create from "zustand";
import type { ThemeType } from "config/theme";

type StoreSchema = {
  theme: ThemeType;
  setTheme: (t: ThemeType) => void;
};

export default create<StoreSchema>((set) => ({
  theme: "light",
  setTheme: (t) => set({ theme: t }),
}));
