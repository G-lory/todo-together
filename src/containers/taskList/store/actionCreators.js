import * as actionTypes from './actionTypes';
import * as taskService from '@api/task';

export const createTask = (task) => {
    return dispatch =>
        taskService.createTask(task).then(res => {
            if (res.success) {
                dispatch(changeModalShow(false));
                taskService.queryTasks().then(res => {
                    dispatch(changeTasks(res.rows));
                });
                return res;
            }
        });
}

export const queryTasks = (params) => {
    return dispatch => {
        taskService.queryTasks(params).then(res => {
            dispatch(changeTasks(res.rows));
        });
    }
}

export const changeModalShow = (visible) => ({
    type: actionTypes.CHANGE_MODAL_SHOW,
    value: visible
})

export const changeTasks = (tasks) => ({
    type: actionTypes.CHANGE_TASKS,
    value: tasks
})