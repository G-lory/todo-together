const Express = require('express');
const path = require('path');

const app = new Express();

app.use('/', Express.static(path.join(__dirname,"..",'build')));


app.listen(3000,(err)=>{
    if(err){
        console.error(err)
    }else{
        console.log(`===>open in a browser to view the app`);
    }
});