// 모듈
const express = require('express');
const app = express();

//라우팅
const home = require('./src/routes/home');

// 앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs'); // html 느낌
//  정적경로로 추가
app.use(express.static(`${__dirname}/src/public`));

app.use('/', home); // use -> 미들웨어를 등록하는 메서드

module.exports = app;

// http로 구현하는 방법
// const http = require('http');
// const app = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.end('여기는 루트입니다');
//   } else if (req.url === '/login') {
//     console.log('여기는 로그인 화면입니다.');
//   }
// });

// app.listen(3001, () => {
//   console.log('http로 가동된 서버');
// });
