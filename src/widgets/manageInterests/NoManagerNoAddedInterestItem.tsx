import React from "react";
import { TInterestItem } from "types";

interface NoManagerNoAddedInterestItemProps {
  data: TInterestItem;
  onClick: () => void;
}

const NoManagerNoAddedInterestItem: React.FC<NoManagerNoAddedInterestItemProps> = ({
  data,
  onClick,
}) => {
  const { interestName } = data;

  return (
    <div onClick={onClick} className="cursor-pointer">
      {interestName}
    </div>
  );
};

export default NoManagerNoAddedInterestItem;
