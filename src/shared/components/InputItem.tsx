import React, { useState } from "react";

import visibility from "../imgs/visibility.svg";
import visibilityOff from "../imgs/visibilityOff.svg";

interface InputItemProps {
  label: string;
  type: string;
  placeholder: string;
  extraBtn: string;
}

const InputItem: React.FC<InputItemProps> = ({ label, type, placeholder, extraBtn }) => {
  const [toggle, setToggle] = useState(false);
  const clickToggleEvent = () => {
    setToggle(!toggle);
  };
  return (
    <div className="w-[500px] h-[80px] content-between border-solid border-2 border-red-500 ">
      <div>{label}</div>
      <div className="relative w-[100%] h-[50px]">
        <input
          className="w-[100%] h-[50px] relative border-solid border-2 border-gray-500 rounded-[10px] p-[10px]"
          type={type}
          placeholder={placeholder}
        />
        {type === "pw" && (
          <button className="absolute top-[13px] right-[10px]" onClick={clickToggleEvent}>
            {toggle ? (
              <img src={visibility} alt="visibility" />
            ) : (
              <img src={visibilityOff} alt="visibility-off" />
            )}
          </button>
        )}
        {extraBtn && (
          <button className="absolute bg-green-500 top-[8px] right-[10px] w-[84px] p-[5px] rounded-[10px]">
            {extraBtn}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputItem;
