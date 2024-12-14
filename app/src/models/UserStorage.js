'use strict';

class UserStorage {
  // 외부에서 데이터에 접근할 수 없게 은닉화 필요 #식별자 사용
  static #users = {
    id: ['jyj', 'won', 'wc123'],
    password: ['1234', '4321', '12345'],
    name: ['조', '몽', '김'],
  };

  //메서드로 은닉화된 데이터 전달
  static getUsers(...fields) {
    // fields -> 키를 배열형태로 키 저장

    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users);
    
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;
