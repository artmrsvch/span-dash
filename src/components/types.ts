import { Actions } from 'src/components/useConstructor';
import { FormInstance } from 'antd';

export type Maybe<T> = T | null
export type Id = string | number

export interface ComponentEditState {
  id: Id;
  uid?: string;
  action: Actions;
}
export interface ClonedProps {
  form: FormInstance;
  onFinish: (values?: any) => void;
}
export enum Size {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}