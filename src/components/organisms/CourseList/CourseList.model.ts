import { IProps as Course } from './CourseElement/CourseElement.model';

export interface IProps extends React.HTMLProps<HTMLDivElement> {
  courses: Course[];
}
