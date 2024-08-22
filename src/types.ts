export type TInterestItem = {
  interestIdx: number;
  interestName: string;
};
export type TUserItem = {
  userIdx: number;
  userNickname: string;
};

export type TManagerItem = {
  managerIdx: number;
  managerNickname: string;
  interestIdx: number;
  interest: string;
};

export type TRequestItem = {
  askIdx: number;
  nickname: string;
  title: string;
  contents: string;
  reply?: string;
  createdAt: string;
};

// main 페이지 달력 내 특정 년월 '스케줄 라벨' 전체 불러오기
export type TScheduleLabelItem = {
  type: string; //interest || personal
  name: string; // type: interest일 때에만
  count: number;
};

// name, idx는 type이 interest면 있음
export type TScheduleItem = {
  idx?: number; // type: interest일 때에만
  name?: string; // type: interest일 때에만
  time: string;
  type?: string; // interest || personal
  contents: string;
  priority: boolean;
};

export type TCategoryItem = {
  categoryIdx: number;
  name: string;
};
