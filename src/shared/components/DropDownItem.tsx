import React from "react";

interface DropDownItemProps {
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropDownItem: React.FC<DropDownItemProps> = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="focus:outline-none">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropDownItem;
