const sqlite3 = require('sqlite3').verbose();
const path = require('path');

let db = new sqlite3.Database(path.join(__dirname, '../db/todo_together.db'), (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the backlog_tasks database.');
});

function createTask({ title, author, content, point, level, status, createTime, updateTime }) {
  return new Promise(function (resolve, reject) {
    const sql = `INSERT INTO backlog_tasks(title, author, content, point, level, status, create_time, update_time)
      VALUES('${title}', '${author}', '${content}', ${point}, ${level}, ${status}, '${createTime}', '${updateTime}')`;

    db.run(sql, function(err, r) {
      if (err) {
        reject(err.message);
      }
      resolve(this.lastID); // 新插入的 id
    });
  })
}

// all 直接获取所有结果、 get 只获取第一行、 each 分别对每一行执行回调函数
function queryTasks() {
  return new Promise(function (resolve, reject) {
    const sql = `SELECT * FROM backlog_tasks`;

    db.all(sql, (err, rows) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(rows);
      }
    });
  })
}

// createTask({
//   title: 'cc', author: 'g-lory', content: 'null',
//   point: 5, level: 1, status: 1,
//   createTime: '2018-11-11 12:12:12',
//   updateTime: '2018-11-11 12:12:12'
// })

// queryTasks().then(res=>console.log(res)).catch(res=>console.log(res))