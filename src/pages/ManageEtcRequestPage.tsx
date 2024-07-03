import React from "react";
import { useLocation } from "react-router-dom";

import HeaderItem from "shared/components/HeaderItem";
import MasterSidebar from "widgets/masterSidebar/MasterSidebar";

// 기타 문의 관리 페이지
const ManageEtcRequestPage = () => {
  const location = useLocation();

  return (
    <section>
      <HeaderItem />
      <article className="fixed mt-[70px] left-0 top-0 h-full">
        <MasterSidebar currentPath={location.pathname} />
      </article>
    </section>
  );
};

export default ManageEtcRequestPage;
