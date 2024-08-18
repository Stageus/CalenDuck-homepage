import React from "react";

import HeaderItem from "shared/components/HeaderItem";
import CalendarItem from "widgets/calendar/CalendarItem";
import InterestScheduleModal from "widgets/interestScheduleModal/InterestScheduleModal";

import { useRecoilState } from "recoil";
import scheduleModalToggleAtom from "shared/recoil/scheduleModalToggleAtom";
import selectedDateAtom from "../shared/recoil/selectedDateAtom";

const ManagerMainPage = () => {
  // 해당 날짜에 해당하는 ScheduleModal 열림
  const [openModal, setOpenModal] = useRecoilState(scheduleModalToggleAtom);
  const [, setSelectedDate] = useRecoilState(selectedDateAtom);

  const openScheduleModalEvent = () => {
    setOpenModal(!openModal);
  };
  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    openScheduleModalEvent();
  };

  return (
    <>
      <HeaderItem />

      <article className="flex flex-col flex-grow">
        <CalendarItem onDateClick={handleDateClick} />
      </article>

      {/* 스케줄 모달 */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div
            className="fixed inset-0 bg-lightgrayColor opacity-50"
            onClick={openScheduleModalEvent}
          ></div>
          <InterestScheduleModal />
        </div>
      )}
    </>
  );
};
export default ManagerMainPage;
