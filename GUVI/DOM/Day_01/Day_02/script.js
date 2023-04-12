// let a = window.prompt("please enter ur name");
// console.log(a);

// window.alert(`Hi ${a} how are you`);

// var b = window.confirm();
// console.log(b);

// setTimeout()

function alertfun(){
    window.alert("Hi Vijay");
}

// alertfun();

const promptele = document.querySelector("#prom-ele")
function promptfun(){
    const names = window.prompt("Please enter your name","default");
    promptele.textContent = `Hi ${names}`
}

function confirmfun(){
    let confe = window.confirm("Name is corect");
    if(confe){
        promptele.innerText = `Yes he is Vijay`
    }
    else{
        promptele.textContent = `He is not             vijay`
    }
}

// setTimeout

console.log("hi");
setTimeout(()=>{console.log("Hi Vijay")},8000);
console.log("hello");

var count = 0;
var countele = document.querySelector(".time-out-btn");
function counterfun(){
 countele.innerText = count;
 count++;
 let times = setTimeout(counterfun, 1000);
    if(count === 10){
        clearTimeout(times)
        countele.innerText = "Times up"
    }
}

// setInterval

// setInterval(()=>{console.log("Hi Vijay")},1000)

// setInterval(counterfun,1000);

function interfun(){
    var ti = setInterval( ()=>{
        console.log(count);
        countele.innerText = count;
        count++;
        if(count===10){
            clearInterval(ti);
            countele.innerText = "Time over"
        }
    },1000)

var clickbtn = document.querySelector("#click-me-btn")

clickbtn.addEventListener("click",()=>{
    console.log("Hi Vijay ok")
})
    
}