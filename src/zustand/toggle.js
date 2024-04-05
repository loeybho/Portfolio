import { create } from "zustand";

const useToggle = create((set) => ({
  bears: false,
  toggleOn: () => {
    set((state) => ({ bears: !state.bears }));
  },
}));

export default useToggle;
