export interface ILink {
  url: string;
  text: string;
}

export interface IListItem {
  id: number;
  txt: string;
  link?: ILink;
}
