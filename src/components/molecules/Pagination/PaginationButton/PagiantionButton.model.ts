export interface IPaginationButton {
  isCurrent?: boolean;
  disabled: boolean;
  children: string | number;
  type?: 'button';
  className?: string;
  onClick: () => void;
}
