const myNums = [1,2,3]

// const myToatl = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)

const myToatl = myNums.reduce( (acc,curr) => acc+curr , 0)

console.log(myToatl);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "python course",
        price : 999
    },
    {
        itemName : "android course",
        price : 399
    },
    {
        itemName : "web course",
        price : 499
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price,0)

console.log(priceToPay);
