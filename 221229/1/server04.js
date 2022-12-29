/*쿼리스트링*/
const express = require('express')
const path = require('path')
const logger = require('morgan')

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

app.post('/info', function (req, res) { //암호화
    const id = req.body.iid;
    const passwd = req.body.ipw;

    res.send(id, passwd)
})

app.listen(port, () => {
    console.log(port + '에서 서버 동작 완료.')
})