// Immediately Invoked Function Expression (IIFE)

(function one() {
    //named IIFE
    console.log(`DB CONNECTED`);

}
)();


( (name ) => {
    console.log(`db connected ${name}`);
    
})('ravi')