import { atom } from "recoil";

const settingSidebarToggleAtom = atom({
  key: "settingSidebarToggle",
  default: false,
});

export default settingSidebarToggleAtom;
