import React from "react";

interface Props {
  weekName: string;
}

const WeekBox = ({ weekName }: Props) => {
  return (
    <article className="w-[100%] flex justify-center items-center">
      <p>{weekName}</p>
    </article>
  );
};

export default WeekBox;
