import React from "react";
import HeaderItem from "shared/components/HeaderItem";
import DropDownItem from "shared/components/DropDownItem";
import ScheduleModal from "widgets/scheduleModal/ScheduleModal";

const MainPage = () => {
  return (
    <>
      <HeaderItem />
      <ScheduleModal />
    </>
  );
};
export default MainPage;
