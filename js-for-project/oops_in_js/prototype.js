// let myName = "ravi     "
// let myChannel = "joshi     "

// console.log(myName.truelength);


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.ravi = function(){
    console.log(`ravi is present in all objects`);
    
}

Array.prototype.joshi = function(){
    console.log(`joshi says good morning`);
    
}
// heroPower.ravi()

// myHeros.ravi()
// myHeros.joshi()
// heroPower.joshi()

// Inheritance
const User = {
   name: "kumar",
   email:"example@gmail.com" 
}

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "ravikumarjoshi"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true length is : ${this.trim().length}`);
    
    
}
anotherUserName.trueLength()
"ravikumar".trueLength()
"ravijoshi".trueLength()