const http  = require('http');  //import    모듈을 가지고 오는 것
const PORT = 12010;
const server = http.createServer((req, res)=>{  //request, response
    res.setHeader('content-type', 'text/plain; charset=utf-8');
    const obj = {
        '이름' : '마마무'
    }
    res.end(JSON.stringify(obj));
})

setTimeout(()=>{
    //에러를 발생시켜서 초마다 서버가 중지되게 만듦
    JSON.parse("{Z")
},3000)

server.listen(PORT,()=>{
    console.log(`Server running at 127.0.0.1:${PORT}`)
});