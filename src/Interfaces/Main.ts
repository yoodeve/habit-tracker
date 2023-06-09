interface iWeek {
  mon: Boolean;
  tue: Boolean;
  wed: Boolean;
  thu: Boolean;
  fri: Boolean;
  sat: Boolean;
  sun: Boolean;
}
export interface iHabit {
  name: String;
  week: iWeek;
}
