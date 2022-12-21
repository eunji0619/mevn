const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
const PORT = 3000;

const _path = path.join(__dirname, './dist');
console.log(_path);

app.use('/dist', express.static(_path)); //정적 접근 폴더 지정
app.use(logger('tiny'));

//커스텀 미들웨어
app.use((req,res,next) => {
    console.log('요청이 왓네요 지나갑니다.')
    next();
})
app.get('/book/:bookName', (req, res) => {
    // const {bookName} = req.params;
    res.send(`안녕하세요 서점임니다. ${req.params.bookName}을 주문하셧군뇨`)
})
app.listen(PORT,()=>{
    console.log(PORT + '로 연결 되었습니다.')
})