function ioOperation(method="", URL="", requestbody="", print = (data)=>{}){

    const request = new XMLHttpRequest();
    request.open(method,URL);
    request.send();
    request.onload = function(){
        print(JSON.parse(this.responseText));
    }

}
function printdata(data=[]){
    console.log(data)
}
var uri = "https://63a3c5a7471b38b20615a032.mockapi.io/api/teacher/Teacherapi";
// ioOperation("GET", uri, null, printdata);
ioOperation("GET", "./Day5.json", null, printdata);


// class classname {
//     constructor(){

//     }
// }

class resume {
    constructor (
        name = "",
        education = "",
        skills = [],
        contactnumber = 0,
        location = "",
        workexp = 0,
        workexp_unit = ""

    ){
        this.name = name,
        this.education = education,
        this.skills = skills,
        this.contactnumber = contactnumber,
        this.location = location,
        this.workexp = workexp,
        this.workexp_unit = workexp_unit
    }
    print(){
        return (`${this.name} & ${this.education} & ${this.workexp} ${this.workexp_unit}`)
    }
    updateexpunit(unit = ""){
        this.workexp_unit = unit;
    }
}

const vijay = new resume(
    "vijay",
    "B Tech",
    ["dev","testing"],
    7259928442,
    "Banglore",
    2,
    "years"
)
vijay.updateexpunit("months");
console.log(vijay.print());

const callme = () =>{
    console.log("call me");
}
callme();

(()=>{
    console.log("IM IIFE");
})();

var names = ()=>{
    console.log("call me")
}
names()
