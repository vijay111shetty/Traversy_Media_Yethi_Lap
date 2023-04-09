//creating element in DOM

let newelement = document.createElement("div")
console.log(newelement)
console.log(this)
console.log(window.document)

//appending

document.body.append(newelement)

//setAttribute

newelement.setAttribute("class","new-ele-class");
newelement.setAttribute("id","new-ele-id");

//getElementById

let getele = document.getElementById("sub-head");
console.log(getele);

//getElementsByClass

let getelel = document.getElementsByClassName("sub-head-class")
console.log(getelel[0])

//query selector

let que = document.querySelector(".query1");
// que.style.backgroundColor = 'red'
console.log(que)

let allque = document.querySelectorAll(".query1")
console.log(allque)

for(let i=0;i<allque.length;i++){
    console.log(allque[i].innerText)
    // allque[i].style.backgroundColor = colors[i];
}

allque[0].innerHTML += `
<h1> headder in side p</h1>
`
let rr = console.log(allque[0].innerHTML)

allque[2].innerText += "ok   test";

allque[1].textContent += " ok     ok ok     ok ok    "

console.log(allque[3].textContent) //won't unwanted space
console.log(allque[3].innerText) //Removes unwanted space inside the tag content


let newelements = document.createElement('h1');
newelements.setAttribute("class","new-header");

newelements.innerText += "Hi Vijay";

document.body.append(newelements)

let a = document.querySelector("#main-head");
console.log(a.innerText)

let r = document.querySelector(".main-header");
r.append("ok test")

