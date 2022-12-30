const express = require('express')
const path = require('path')
const logger = require('morgan')
const { Server } = require('socket.io')
const http = require('http')
const app = express()

const server = http.createServer(app)
const io = new Server(server)

const port = 3000
const _path = path.join(__dirname, '/')
console.log(_path)

app.use('/', express.static(_path))
app.use(logger('tiny'))


io.on('connection', (socket) => {  //접속
    socket.on('chat message', (msg) => {    //받기
        io.emit('chat message', msg)    //받을 이벤트 내용?(보낼내용)
    })
})

server.listen(port, () => {
    console.log(port + '에서 서버 동작 완료.')
})