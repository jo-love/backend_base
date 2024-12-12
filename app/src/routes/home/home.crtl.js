'use strict';

// controller 함수
const home = (req, res) => {
  res.render('home/index');
};

const login = (req, res) => {
  res.render('home/login');
};

module.exports = { home, login };
