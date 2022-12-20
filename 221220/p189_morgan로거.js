const express = require('express')
const loogger = require('morgan')
const app = express()
const port = 3000

app.use(loogger('tiny'))
app.use((req,res,next)=>{
    console.log('1 Time : ', Date.now())
    next()
})
app.use((req,res,next)=>{
    console.log('2 Time : ', Date.now())
    next()
})

app.listen(port, () => {
  console.log(`Success app listening on port ${port}`)
})