export interface IProps {
  tags: string[];
}

export interface DefaultTagsTypes {
  [key: string]: {
    label: string;
    fontColor: string;
    bgColor: string;
  };
}
