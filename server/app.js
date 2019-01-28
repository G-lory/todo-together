const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = new express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();
// 路由中间件
router.use((req, res, next) => {
	// 任何路由信息都会执行这里面的语句
	console.log(req.body, req.path, req.query);
	console.log('this is a api request!');
	// 把它交给下一个中间件，注意中间件的注册顺序是按序执行
	next();
})

router.get('/user/list', (req, res) => {
	const userList = [
		{
			name: 'luffy',
			age: 24,
			gender: '男'
		},{
			name: 'lfy',
			age: 23,
			gender: '女'
		}
	];
	res.json(userList);
});
app.use('/api', router); //添加router中间件

// app.use('/', Express.static(path.join(__dirname,"..",'build')));


app.listen(3000,(err)=>{
    if(err){
        console.error(err)
    }else{
        console.log(`===>open in a browser to view the app`);
    }
});