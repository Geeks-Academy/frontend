export interface ILink {
  url: string;
  text: string;
}
export interface IListElement {
  id: number;
  txt: string;
  link?: ILink;
}
