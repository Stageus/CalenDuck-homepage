import React from "react";
import { TUserItem } from "types";

interface UserNicknameProps {
  data: TUserItem;
  onClick: () => void;
}

const GeneralUserItem: React.FC<UserNicknameProps> = ({ data, onClick }) => {
  const { userNickname } = data;

  return (
    <div onClick={onClick} className="cursor-pointer">
      {userNickname}
    </div>
  );
};

export default GeneralUserItem;
