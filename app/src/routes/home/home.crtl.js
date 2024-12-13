'use strict';

const users = {
  id: ['jyj', 'won', 'wc123'],
  password: ['1234', '4321', '12345'],
};
// 화면을 렌더링해주는 코드
const output = {
  // controller 함수
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
};

// 프론트단에서 데이터를 받아서 처리하는 부분이니까 process
const process = {
  login: (req, res) => {
    const id = req.body.id,
      password = req.body.password;
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] === password) {
        return res.json({ success: true });
      }
    }
    return res.json({ success: false, msg: '로그인 실패' });
  },
};

module.exports = { output, process };
