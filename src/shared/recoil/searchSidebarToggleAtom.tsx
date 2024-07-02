import { atom } from "recoil";

const searchSidebarToggleAtom = atom({
  key: "searchSidebarToggle",
  default: false,
});

export default searchSidebarToggleAtom;
