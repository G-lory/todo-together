const taskModel = require('../models/task-model');
const { timeFormat } = require('../util');

function createTask(req, res) {
    // console.log(req.body)
    let params = req.body;
    params.createTime = params.updateTime = timeFormat(new Date());
    console.log(params);
    taskModel.createTask(params).then(r => {
        res.json({
            success: true
        });
    }).catch(e => {
        res.json({
            success: false,
            message: e
        });
    })
}

function queryTasks(req, res) {
    let params = req.query;
    console.log(params);
    taskModel.queryTasks(params).then(r => {
        res.json({
            success: true,
            rows: r
        });
    }).catch(e => {
        res.json({
            success: false,
            message: e
        });
    })
}

module.exports = {
    createTask,
    queryTasks
}