var num = [2,3,4,5,6,8,9];

//forEach
//Iterates over a array
var nn = [];
num.forEach((element)=>{
    nn.push(element)
}
)

//map
//Iterates over arraya and returns new array with same size of the original array
var newnum = num.map((element)=>{
    // if (element < 8){
        return  element * 2;
    // }

}
)

//Filter
//Iterates new array with some condition new array can be of different size
var newnum1 = newnum.filter((element)=>{
    return element<10;
})

// console.log(newnum1)

//Reduce
//Returens single value by iterating array
var sumnum = num.reduce((a,b)=>{
    return (a+b, a*b);
}
);

const items = [
    {
        itemname : "abcd",
        price : 33,
        quantity :2
    },
    {
        itemname: "xyz",
        price : 22,
        quantity:1
    },
    {
        itemname:"qwe",
        price:10,
        quantity:11
    }
]
items.push({itemname:"sss",price:10,quantity:10});
// var total = items.reduce((a,b)=>{
//     if(typeof a === "object"){
//         return (
//             a.price * a.quantity + b.price * b.quantity
//         )
//     }
//     return a+b.price*b.quantity;
// })
// console.log(total);

var newite = items.filter((a)=>{
    if(a.quantity>3){
        return a.itemname;
    }
}).map((element)=>{return element.itemname})

// console.log(newite)
// alert(newite);

// var a = prompt("Enter first number");
// var b = prompt("Enter last number");
// alert(a+b);

// 