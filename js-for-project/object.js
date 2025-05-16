//singleton
// Object.create

//object literals

const mySym = Symbol("key1")


const Jsuser = {
    name : "ravi",
    "full name ":"ravi joshi",
    [mySym]:"myke1",
    age : 20,
    location : "najibabad",
    email : "ravik@gamil.com",
    isLoggedIn :false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name "]);
// console.log(Jsuser[mySym]);


Jsuser.email = "gulshan@gmail.com"

// Object.freeze(Jsuser)
Jsuser.email = "XYZ@gmail.com"

// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello js users");
    
}
Jsuser.greetingTwo = function(){
    console.log(`hello js users,${this.name}`);
    
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

