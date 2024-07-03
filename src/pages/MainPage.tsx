import React from "react";

import HeaderSidebarContainer from "shared/components/HeaderSidebarContainer";
import CalendarItem from "widgets/calendar/CalendarItem";

const MainPage = () => {
  return (
    <section className="relative flex z-0">
      <article className="flex flex-col flex-grow">
        <HeaderSidebarContainer />
        <CalendarItem />
      </article>
    </section>
  );
};
export default MainPage;
