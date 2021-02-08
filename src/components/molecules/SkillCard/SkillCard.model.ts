import { IAttributes } from 'types/interfaces';

export interface ISkillCard extends IAttributes<HTMLDivElement> {
  title: string;
  content: string;
}
