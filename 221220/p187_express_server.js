const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {    //  / = root path   ?뒤에는 질의, 요청이 들어감 경로 = router
  res.send('<h1>민,,초,,,,,멈,,,,,처,,,,,,,,,,</h1>')
})

app.get('/main', (req, res) => {    
  res.send('main 경로로 오신 것을 환영합니다.')
})

app.get('/main/login', (req, res) => {    
    res.send('login 경로로 오신 것을 환영합니다.')
})

app.listen(port, () => {
  console.log(`Success app listening on port ${port}`)
})