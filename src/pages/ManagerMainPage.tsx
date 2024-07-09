import React from "react";
import { useLocation } from "react-router-dom";

import HeaderItem from "shared/components/HeaderItem";
import CalendarItem from "widgets/calendar/CalendarItem";
import ManagerScheduleModal from "widgets/managerScheduleModal/ManagerScheduleModal";

import { useRecoilState } from "recoil";
import scheduleModalToggleAtom from "shared/recoil/scheduleModalToggleAtom";

const ManagerMainPage = () => {
  // URL 쿼리스트링을 통한 내가 manager인 subject 추출
  const location = useLocation();
  const urlSearch = new URLSearchParams(location.search);
  const managingSubject = urlSearch.get("subject");

  // 해당 날짜에 해당하는 ScheduleModal 열림
  const [openModal, setOpenModal] = useRecoilState(scheduleModalToggleAtom);
  const openScheduleModalEvent = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <HeaderItem />

      <article className="flex flex-col flex-grow">
        <CalendarItem />
      </article>

      {/* 스케줄 모달 */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div
            className="fixed inset-0 bg-lightgrayColor opacity-50"
            onClick={openScheduleModalEvent}
          ></div>
          <ManagerScheduleModal />
        </div>
      )}
    </>
  );
};
export default ManagerMainPage;
