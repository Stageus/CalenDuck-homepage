export type TInterestItem = {
  interestIdx: number;
  interestName: string;
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
