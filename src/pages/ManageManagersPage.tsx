import React from "react";
import { useLocation } from "react-router-dom";

import HeaderItem from "shared/components/HeaderItem";
import MasterSidebar from "widgets/masterSidebar/MasterSidebar";

// 관심사 관리자(매니저) 계정 관리 페이지
const ManageManagersPage = () => {
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

export default ManageManagersPage;
