import { atom } from "recoil";

const selectedDateAtom = atom<Date | null>({
  key: "selectedDate",
  default: null,
});

export default selectedDateAtom;
