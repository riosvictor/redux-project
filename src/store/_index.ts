import {createStore} from 'redux'
import { IAction, ICounter } from '../models'

const reducerFn = (state: ICounter = {counter: 0}, action: IAction): ICounter => {
  if (action.type === 'INCREMENT') {
    const counter = state.counter + 1

    return { counter }
  }

  if (action.type === 'DECREMENT') {
    const counter = state.counter - 1

    return { counter }
  }

  if (action.type === 'ADD') {
    const counter = state.counter + action.payload

    return { counter }
  }

  return state
}


const store = createStore(reducerFn)

export default store