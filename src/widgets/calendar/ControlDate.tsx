import React from "react";

interface Props {
  nowDate: Date;
  setNowDate: React.Dispatch<React.SetStateAction<Date>>;
}

const ControlDate = ({ nowDate, setNowDate }: Props) => {
  const changeYear = (change: number) => {
    const date = new Date(nowDate.getTime());
    date.setFullYear(date.getFullYear() + change);
    setNowDate(date);
  };
  const changeMonth = (change: number) => {
    const date = new Date(nowDate.getTime());
    date.setMonth(date.getMonth() + change);
    setNowDate(date);
  };

  return (
    <article className="w-full h-[40px] flex justify-center items-center">
      <div>
        <button onClick={() => changeYear(-1)} className="m-[10px]">{`<<`}</button>
        <button onClick={() => changeMonth(-1)} className="m-[10px]">{`<`}</button>
      </div>
      <h2 className="font-bold text-xl mx-[15px]">{`${nowDate.getFullYear()}.${
        nowDate.getMonth() + 1
      }`}</h2>
      <div>
        <button onClick={() => changeMonth(1)} className="m-[10px]">{`>`}</button>
        <button onClick={() => changeYear(1)} className="m-[10px]">{`>>`}</button>
      </div>
    </article>
  );
};

export default ControlDate;
