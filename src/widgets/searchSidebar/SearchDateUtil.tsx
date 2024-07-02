import React, { useEffect } from "react";

// 검색 기간의 시작점 지정에 따른 끝점의 최소값 설정

const SearchDateUtil = (
  startDateRef: React.MutableRefObject<HTMLInputElement | null>,
  endDateRef: React.MutableRefObject<HTMLInputElement | null>
) => {
  const handleStartDateChange = () => {
    if (startDateRef.current && endDateRef.current) {
      endDateRef.current.min = startDateRef.current.value;
    }
  };

  const startDateElem = startDateRef.current;

  if (startDateElem) {
    startDateElem.addEventListener("change", handleStartDateChange);
  }

  return () => {
    if (startDateElem) {
      startDateElem.removeEventListener("change", handleStartDateChange);
    }
  };
};

export default SearchDateUtil;
