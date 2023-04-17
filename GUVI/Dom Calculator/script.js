var equlbtn = document.getElementById("equal-btn");
equlbtn.addEventListener("click", ()=>{
    // console.log("ok test");
    var res = eval(outpustscr.value);
    window.alert((`${outpustscr.value} = ${res}`));
    // outpustscr.innerText += res;
})
// equlbtn.addEventListener("keydown", (event)=>{
//     // console.log("ok test");
//     var res = eval(outpustscr.value);
//     window.alert((`${outpustscr.value} = ${res}`));
//     // outpustscr.innerText += res;
// })
var clearbtn = document.getElementById("C-btn");
var backbtn = document.getElementById("back-btn");
var dotbtn = document.getElementById("dot-btn");
var multiplybtn = document.getElementById("multiply-btn");
var sevenbtn = document.getElementById("seven-btn");
var eightbtn = document.getElementById("eight-btn");
var ninebtn = document.getElementById("nine-btn");
var frwdslashbtn = document.getElementById("frwdslash-btn");
var fourbtn = document.getElementById("four-btn");
var fivebtn = document.getElementById("five-btn");
var sixbtn = document.getElementById("six-btn");
var minusbtn = document.getElementById("minus-btn");
var onebtn = document.getElementById("one-btn");
var twobtn = document.getElementById("two-btn");
var threebtn = document.getElementById("three-btn");
var plusbtn = document.getElementById("plus-btn");
var singlezero = document.getElementById("singlezero-btn");
var doublezero = document.getElementById("doublezero-btn");
var outpustscr = document.getElementById("output");


outpustscr.addEventListener("keydown",(event)=>{
    var values = ["1","2","3","4","5","6","7","8","9","0","+","-","*","/","."]
    var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    if(values.indexOf(event.key) != -1){
        outpustscr.textContent += event.key
    }
    else if(alpha.indexOf(event.key.toLowerCase()) != -1){
        window.alert("Only numbers are allowed")
        location.reload();
    }
    else if(event.key === "Enter"){
        var res = eval(outpustscr.value);
        window.alert((`${outpustscr.value} = ${res}`));
        location.reload();
    }
})

var btns = [clearbtn,doublezero,singlezero,plusbtn,threebtn,twobtn,fourbtn,onebtn,minusbtn,sixbtn,fivebtn,dotbtn,multiplybtn,sevenbtn,eightbtn,ninebtn,frwdslashbtn,]
for(let bt of btns){
        bt.addEventListener("click",()=>{
            if(bt.value !== "C"){
            outpustscr.textContent += bt.value;
            }
            else if(bt.value === "C"){
                location.reload();
            }
        })
}
