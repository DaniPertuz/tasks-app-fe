import { TaskStatus } from '../../interfaces';

export interface Task {
  id?:    string;
  title:  string;
  body:   string;
  status: TaskStatus;
}
