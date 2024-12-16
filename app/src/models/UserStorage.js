'use strict';

// data table 불러오기
const fs = require('fs').promises;

class UserStorage {
  // 외부에서 데이터에 접근할 수 없게 은닉화 필요 #식별자 사용 + private한 변수나 메소드는 최상단에 위치
  static #getUSerInfo() {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users);
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
  //메서드로 은닉화된 데이터 전달
  static getUsers(...fields) {
    // fields -> 키를 배열형태로 키 저장
    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    return fs
      .readFile('./src/databases/base/users.json')
      .then((data) => {
        return this.#getUSerInfo(data, id);
      })
      .catch((err) => console.err(err));
  }

  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.password.push(userInfo.password);
    return { success: true };
  }
}

module.exports = UserStorage;
