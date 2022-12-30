const express = require('express')
const path = require('path')
const logger = require('morgan')
const multer = require('multer')

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

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, _path) // 경로를 같은 폴더에 설정
  },
  filename: (req, res, cb) => {
    let fix = Buffer.from(res.originalname, 'latin1').toString('utf8') // 한글깨짐방지
    cb(null, fix) // 오리지날네임 설정
    // cb(null, res.originalname)
  }
})

let upload = multer({ storage: storage }) // 멀터의 옵션을 오브젝트로 설정

app.post('/up', upload.single('ufile'), (req, res) => {
  // 파일 단독으로 전송옵션
  console.log(req.file)
  res.send(
    `<script>alert("파일 업로드 완료!");location.replace('index.html')</script>`
  ) // history.go(-1) 뒤로 한 스탭가기
})

app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
