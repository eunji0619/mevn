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

app.get('/story', function (req, res) {
  const arr = ['my life is pretty', 'Egg is Life', 'Cute & I do not have cat', 'Avengers are Dead']
  const pick = `<h2>
    <ul>
      <li><a href="/story?id=0">pretty</a></li>
      <li><a href="/story?id=1">Egg</a></li>
      <li><a href="/story?id=2">Dog & Cat</a></li>
      <li><a href="/story?id=3">Avengers</a></li>
    </ul>
  </h2>${arr[req.query.id] ?? '선택하세요.'}`
  // res.send(arr[req.query.id])
  res.send(pick)
})

app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})