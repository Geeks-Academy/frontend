export interface IBox {
  value: number;
  position: number;
}

export interface IYearBar {
  year: number;
  minYear: number;
  maxYear: number;
  // setWasTheChangeInMainComponent: (value: boolean) => void
  setSelectedYear: (year: number) => void;
  handleAddClass: (ref: React.RefObject<HTMLElement>, currentYear: number) => void;
  handleRemoveClass: (ref: React.RefObject<HTMLElement>) => void;
}
