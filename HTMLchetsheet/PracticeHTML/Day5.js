const request = new XMLHttpRequest();
const url = "https://63a3c5a7471b38b20615a032.mockapi.io/api/teacher/Teacherapi";
// request.open('GET',url);
// request.send();
request.onload = function(){
    // console.log(this.responseText);

}
function IOoperation(Method = "", URI = "", Body = "", print = (data)=>{}){

    const request = new XMLHttpRequest();
    const requestbody = JSON.stringify(Body)
    request.open(Method,URI);
    if(Method === "GET"){
        request.send();
    }
    else{
        request.send(requestbody);
    }
    request.onload = function(){
        // print()
        print(JSON.parse(this.responseText));
    }
    
}
function printData(data=[]){
    console.log(data)
}
IOoperation("GET",url,null,printData)
IOoperation("GET","./Day5.json",null,printData)
