import { IAttributes } from 'types/interfaces';
import { IProps as Course } from './CourseElement/CourseElement.model';

export interface IProps extends IAttributes<HTMLDivElement> {
  courses: Course[];
}
