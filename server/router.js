const express = require('express');
const router = express.Router();
const { createTask } = require('./controllers/taskController');
router.use((req, res, next) => {
  // 任何路由信息都会执行这里面的语句
  console.log(req.body, req.path, req.query);
  console.log('this is a api request!');
  // 把它交给下一个中间件，注意中间件的注册顺序是按序执行
  next();
})
router.post('/createTask', createTask);

module.exports = router;