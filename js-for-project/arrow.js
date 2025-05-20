const user = {
    username: "ravi",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to website `);
        console.log(this);


    }
}
// user.welcomeMessage()
// user.username = "joshi"
// user.welcomeMessage()

// console.log(this);

// function one() {
//     let username = "joshiJI"
//     console.log(this.username);

// }
// one()

// const two = function(){
//     let username = "kumar"
//     console.log(this.username);
    
// }
// two()
const two = () => {
    let username = "kumar"
    console.log(this.username);
}
// two()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2 // implicite return
// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({ username : "ravi"})
console.log(addTwo(5,6));

const myArray = [2,5,6,8,7,9]
// myArray.forEach()
