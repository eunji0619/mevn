const express = require('express')
import express from express;

const logger = require('morgan');
const app = express()
const port = 3000

app.use('/', express.static('D://jej//mevn//221221//p193'))
app.use(logger('tiny'))
app.listen(port, () => {
    console.log(port + '로 연결되었습니다.')
})