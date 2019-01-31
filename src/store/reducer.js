import { combineReducers } from 'redux-immutable';

import { reducer as taskListReducer } from '../containers/taskList/store';

export default combineReducers({
  taskList: taskListReducer
})