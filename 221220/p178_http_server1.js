const http  = require('http');  //import    모듈을 가지고 오는 것
const PORT = 12010;
const server = http.createServer((req, res)=>{  //request, response
    res.setHeader('content-type', 'text/plain; charset=utf-8');
    res.end('안녕하세요 MEVN 프로젝트입니다.');
})

server.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`)
});