class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai","abc@gmail.com","12345")

chai.logMe()
const  userObje = new User("ravi kumar")

userObje.logMe()

// console.log(chai === userObje);
console.log(chai instanceof User);

