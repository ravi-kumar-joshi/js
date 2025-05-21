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

// console.log(Jsuser.greeting());
// console.log(Jsuser.greetingTwo());


// const tinderUser1 = new Object()
// console.log(tinderUser1);
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "gulshan"
tinderUser.isLogged = false

// console.log(tinderUser);

const regularUser = {
    email :"some@gameail.com",
    fullanme : {
        userfullname : {
            firstname : "ravi",
            lastname: "joshi"
        }
    }
}

// console.log(regularUser.fullanme.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj3 = { obj1 , obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = {...obj1,...obj2}
// console.log(obj4);

const users = [
    {
        id:1,
        email : "r@gamil.com"
    },
    {
        id:1,
        email : "r@gamil.com"
    },
    {
        id:1,
        email : "r@gamil.com"
    },
]

users[1].email
// console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    courseName : "js in hindi",
    price : "999",
    coureseInstructor : "hitesh"
}

// course.coureseInstructor
const {coureseInstructor : instructor} = course

// console.log(coureseInstructor);
console.log(instructor);

// const navbar = ({company}) => {

// }

// navbar(company = "ravi")
// ++++++++++++++++++++++ API ++++++++++++++++++++++++++++++++

// {
//     "name" : "ravi",
//     "coursename" : "js for web",
//    " price" : "free"
// }

[
    {},
    {},
    {}
]






