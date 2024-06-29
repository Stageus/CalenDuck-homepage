import React from "react";

interface DropDownItemProps {
  options: string[];
}

const DropDownItem: React.FC<DropDownItemProps> = ({ options }) => {
  return (
    <select>
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  );
};

export default DropDownItem;
