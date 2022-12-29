/*쿼리스트링*/
const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')

const app = express()
const port = 3000
const _path = path.join(__dirname, '/')
console.log(_path)

app.use('/', express.static(_path))
app.use(logger('tiny'))

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)

app.post('/info', function (req, res) {
    const name = req.body.name;
    const age = req.body.age;

    //파일이 이미 있는지 여부를 확인하는 코드 - 있으면 있다, 없으면 생성
    fs.stat(_path + '홍길동.txt', (err, stats) => {
        if (stats) {
            res.send(`<script>alert("${name}.txt 파일이 이미 존재함.${name}1.txt이름으로 저장");history.go(-1)</script>`)
            fs.writeFile(_path + name + '1.txt', age, (e) => {
                if (e) throw (e)
            })
        } else {
            fs.writeFile(_path + name + '.txt', age, (e) => {
                if (e) throw (e)
            })
            res.send(`<script>alert("${name}.txt 파일 저장 완료.")</script>`)
        }
        console.log(stats)
    })
})

//파일이 없을경우 생성 , 있을경우 내용추가 - server02.js

app.listen(port, () => {
    console.log(port + '에서 서버 동작 완료.')
})