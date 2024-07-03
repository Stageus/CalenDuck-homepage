import React from "react";

import HeaderSidebarContainer from "shared/components/HeaderSidebarContainer";
import CalendarItem from "widgets/calendar/CalendarItem";

const MainPage = () => {
  return (
    <>
      <HeaderSidebarContainer />
      <article className="mt-[70px] flex flex-col flex-grow">
        <CalendarItem />
      </article>
    </>
  );
};
export default MainPage;
