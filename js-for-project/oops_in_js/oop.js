const user = {
    username: "ravi",
    loginCount:8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
        
    }
}



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promise1 = new Promise()
// const date = new Date()


function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const UserOne = new User("joshi",12,true)
const UserTwo = new User("kumar",21,false)
console.log(UserOne.constructor);
// console.log(UserTwo);
