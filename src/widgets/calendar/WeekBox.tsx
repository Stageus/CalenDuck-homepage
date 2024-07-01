import React from "react";

interface Props {
  weekName: string;
}

const WeekBox = ({ weekName }: Props) => {
  return (
    <article className="bg-lightgrayColor w-[100%] flex justify-center items-center">
      <p>{weekName}</p>
    </article>
  );
};

export default WeekBox;
