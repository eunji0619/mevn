/*쿼리스트링*/
const express = require('express')
const path = require('path')
const logger = require('morgan')

const app = express()
const port = 3000
const _path = path.join(__dirname, '/dist')
console.log(_path)

app.use('/', express.static(_path))
app.use(logger('tiny'))

app.get('/pw', function (req, res) {    //http://localhost:3000/pw?id=%E3%85%87%E3%85%88&pw=1234
    res.send(`[비밀번호 경청]<br>
    ${req.query.id}님 하잉<br>
    ${req.query.pw}의 비밀번호를 수정 하시겠나요?<br>
    ${req.query.pw}==><a href="/inf">변경`)
})

app.listen(port, () => {
    console.log(port + '에서 서버 동작 완료.')
})