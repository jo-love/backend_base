'use strict';

const UserStorage = require('../../models/UserStorage');
const User = require('../../models/User');

// 화면을 렌더링해주는 코드
const output = {
  // controller 함수
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
  register: (req, res) => {
    res.render('home/register');
  },
};

// 프론트단에서 데이터를 받아서 처리하는 부분이니까 process
const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
  register: (req, res) => {
    const user = new User(req.body);
    const response = user.register();
    return res.json(response);
  },
};

module.exports = { output, process };
