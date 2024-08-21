import React from "react";
import { TInterestItem } from "types";

interface NoManagerInterestItemProps {
  data: TInterestItem;
  onClick: () => void;
}

const NoManagerInterestItem: React.FC<NoManagerInterestItemProps> = ({ data, onClick }) => {
  const { interestName } = data;

  return (
    <div onClick={onClick} className="cursor-pointer">
      {interestName}
    </div>
  );
};

export default NoManagerInterestItem;
