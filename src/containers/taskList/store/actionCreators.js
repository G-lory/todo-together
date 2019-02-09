import * as actionTypes from './actionTypes';
import * as taskService from '@api/task';

export const createTask = (task) => {
  return dispatch =>
    taskService.createTask(task).then(res => {
      if (res.success) {
        dispatch(changeModalShow(false));
        queryTask();
        return res;
      }
    });
}

export const queryTask = (task) => {
  taskService.queryTask().then(res => {
    console.log(res)
  });
}

export const changeModalShow = (visible) => ({
  type: actionTypes.CHANGE_MODAL_SHOW,
  value: visible
})
