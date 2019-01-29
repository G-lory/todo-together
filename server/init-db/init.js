const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// 创建数据库 todo_together
let tasks_db = new sqlite3.Database(path.join(__dirname, '../db/todo_together.db'), (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the todo_together database.');
});

// 创建表 create_backlog_tasks_sql
const create_backlog_tasks_sql = `
CREATE TABLE IF NOT EXISTS backlog_tasks
(
    id              INTEGER PRIMARY KEY autoincrement,
    title           VARCHAR(255) NOT NULL,
    author          VARCHAR(255) NOT NULL,
    content         VARCHAR(255) NOT NULL,
    point           INT          NOT NULL,
    level           INT          NOT NULL,
    status          INT          NOT NULL,
    create_time     DATETIME     NOT NULL,
    update_time     DATETIME     NOT NULL
)`;

tasks_db.run(create_backlog_tasks_sql, function (err) {
  if (err) {
    console.log('创建数据库 backlog_tasks 失败', err);
  } else {
    console.log('创建数据库 backlog_tasks 成功');
  }
});

tasks_db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
