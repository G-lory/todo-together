import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  formVisible: false,
  tasks: []
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_MODAL_SHOW:
      return state.set('formVisible', action.value);
    case actionTypes.CHANGE_TASKS:
      return state.set('tasks', fromJS(action.value));
    default:
      return state;
  }
}