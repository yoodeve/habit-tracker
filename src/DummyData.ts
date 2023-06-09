import {iHabit} from './Interfaces/Main';

export const habitObj: Array<iHabit> = [
  {
    name: '책 2페이지 이상 읽기',
    week: {
      mon: true,
      tue: true,
      wed: true,
      thu: true,
      fri: true,
      sat: true,
      sun: true,
    },
  },
  {
    name: '책 2페이지 이상 읽기',
    week: {
      mon: true,
      tue: true,
      wed: true,
      thu: false,
      fri: true,
      sat: true,
      sun: true,
    },
  },
];
