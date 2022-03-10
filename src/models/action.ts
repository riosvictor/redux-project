type TActionOptions = 'INCREMENT' | 'DECREMENT' | 'ADD'

export interface IAction {
  type: TActionOptions;
  payload?: any;
}