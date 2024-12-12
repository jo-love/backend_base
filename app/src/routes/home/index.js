// 라우팅 관리
'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('./home.crtl');

// router.get('/', (req, res) => {
//   res.render('home/index');
// });

// 컨트롤러 함수로 분리해서 작성한 코드
router.get('/', ctrl.home);

router.get('/login', ctrl.login);

// 외부파일에서 router를 사용할 수 있도록 export가 필요
module.exports = router;
 