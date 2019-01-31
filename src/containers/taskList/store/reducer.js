import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  formVisible: false,
  tasks: [{
    id: 1,
    title: '写英语作业'
  }, {
    id: 2,
    title: '写语文作业'
  }]
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_MODAL_SHOW:
      return state.set('formVisible', action.value);
    default:
      return state;
  }
}