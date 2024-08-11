import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
// import userInfoAtom from "../../recoil/userInfoAtom";

// 회원탈퇴 DELETE api 연결 (/users)
const DeleteAccountItem = () => {
  return (
    <button className="text-sm px-[10px] py-[5px] rounded-[5px] hover:bg-subColor">탈퇴하기</button>
  );
};

export default DeleteAccountItem;
