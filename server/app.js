const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router');

const app = new express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router); // 添加 router 中间件

// app.use('/', Express.static(path.join(__dirname,"..",'build')));


app.listen(3001,(err) => {
    if (err) {
        console.error(err)
    } else {
        console.log(`===>open in a browser to view the app`);
    }
});