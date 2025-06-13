class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username : ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const ravi = new User("joshi");
// console.log(ravi.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const secObj = new Teacher("ravikaumr","example@gmail.com")

secObj.logMe()
console.log(secObj.createId());

