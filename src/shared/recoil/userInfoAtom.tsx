import { atom } from "recoil";

const userInfoAtom = atom({
  key: "userInfo",
  default: {},
});

export default userInfoAtom;
