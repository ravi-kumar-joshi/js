

function syaMyName() {
    console.log("h");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("0");
}
// syaMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result

    return num1 + num2

}

const result = addTwoNumbers(15, 5)

// console.log("result :" ,result);

// function loginUserMessage(username) {
//     if (username === undefined) {
//         console.log("Please enter username");
//         return
//     }
//     return `${username} just logged in`
// }

function loginUserMessage(username = "default user") {
    if (!username) {
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

const userName = loginUserMessage("ravi_joshi")
// console.log(loginUserMessage());


// console.log(userName);

function calculateCartPrice(val1, val2, ...num3) {//rest operator
    return num3
}

// console.log(calculateCartPrice(200,400,500,1000));

const user = {
    username: "ravikumar",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user)
handleObject({
    username : "ravi",
    price : 399
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,800]));



