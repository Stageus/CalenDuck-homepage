import { atom } from "recoil";

const navToggleAtom = atom({
  key: "sidebarToggle",
  default: false,
});

export default navToggleAtom;
