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

export type TScheduleItem = {
  idx: number;
  name?: string; // type: interest일 때에만
  time: string;
  type?: string; // interest || personal
  contents: string;
  priority: boolean;
};
