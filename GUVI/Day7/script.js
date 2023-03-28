var data1 = document.getElementById("email");
data1.addEventListener("input",(e)=>{
    // console.log(e.target.value);
    let data = {};
    data[e.target.id]=e.target.value;
    console.log(data)
})