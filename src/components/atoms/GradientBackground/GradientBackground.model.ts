export type GradientType = {
  angle?: string;
  colors: string[];
};

export interface IProps
  extends React.HTMLAttributes<HTMLDivElement>,
    React.RefAttributes<HTMLDivElement> {
  background: string;
  children?: JSX.Element[] | JSX.Element | string;
  gradient?: GradientType;
}
