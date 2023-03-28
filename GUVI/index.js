console.time("timer");

console.log("call back function");

function greet(str){
    setTimeout(()=>{
        console.log(`Good morning ${str}`)
    },2000);
}

function Tables(num, callback){
    setTimeout(()=>{
        for(var i=1;i<=10;i++){
            document.write(`<li>${num} *${i} == ${num*i}</li>`)
        }
        callback("vijay");
    },4000);
}
Tables(10, greet);
console.assert(12<11,'false');
console.log(12>11,"true");
console.timeEnd("timer");