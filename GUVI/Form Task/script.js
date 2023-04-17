// var firstname = document.getElementById("firstname")
// console.log(firstname.value)
// window.alert(firstname.value)
// firstname.addEventListener("")

// var submitbtn = document.querySelector(".submits");
// submitbtn.addEventListener("click",()=>{
//     console.log(firstname.value)
// })
var showele = document.getElementById("result-table")
function collectvalues(){
    let firstnames = document.getElementById("firstname").value;
    let lastnames = document.getElementById("lastname").value;
    let address = document.getElementsByTagName("textarea").value;
    let state = document.getElementById("statename").value;
    let country = document.getElementById("countryname").value;
    let pincode = document.getElementById("pincodenum").value;
    // var 
    
    showele.innerText = firstnames +lastnames+address+state+country+pincode
    // showele.innerText += lastnames
    // +address+state+country+pincode
}

var submitbtn = document.getElementById("submitbut");
// submitbtn.addEventListener("click",collectvalues)
// ()=>{
//     var firstnamees = document.getElementById("firstname").value;
//     var showele = document.getElementById("result-table")
//     showele.innerText=firstnamees;
// }
// )
function tabledisplayval() {
    var gensel;
    var foodsel;
    var malegend = document.getElementById("Male");
    var femalegend = document.getElementById("Female");
    var othergend = document.getElementById("Other");
    if(malegend.checked){
        gensel = "Male";
    }
    else if (femalegend.checked){
        gensel = "Female";
    }
    else if (othergend.checked){
        gensel = "Other"
    }
    var foodrad = document.getElementsByClassName("foodradio");
    console.log(foodrad[0])
    for(let i of foodrad){
        // let resfood = [];
        if(i.checked){
            
            foodsel += i.getAttribute("id");
        }
        
    }
    if(typeof foodsel==='undefined' || typeof gensel==="undefined"){
        if(typeof foodsel==='undefined'){
            window.alert("Please select atleast 2 food items");
            location.reload();
        }
        else{
            window.alert("Please select gender")
            location.reload();
        }
        
    }
    console.log(foodsel)
    var displaytable = document.createElement("table");
    var displaytablehead = document.createElement("thead");
    var displaytablebody = document.createElement("tbody");

    var displaytabletr = document.createElement("tr");
    var displaytableheaderfirstname = document.createElement("th");
    displaytableheaderfirstname.textContent = "First Name";
    var displaytableheaderlastname = document.createElement("th");
    displaytableheaderlastname.textContent = "Last Name";
    var displaytableheaderaddress = document.createElement("th");
    displaytableheaderaddress.textContent = "Address";
    var displaytableheaderstate = document.createElement("th");
    displaytableheaderstate.textContent = "State";
    var displaytableheadercountry = document.createElement("th");
    displaytableheadercountry.textContent = "Country";
    var displaytableheaderpincode = document.createElement("th");
    displaytableheaderpincode.textContent = "Pincode";
    var displaytableheadergender = document.createElement("th");
    displaytableheadergender.textContent = "Gender";
    var displaytableheaderfood = document.createElement("th");
    displaytableheaderfood.textContent = "Food";

    displaytabletr.appendChild(displaytableheaderfirstname);
    displaytabletr.appendChild(displaytableheaderlastname);
    displaytabletr.appendChild(displaytableheaderaddress);
    displaytabletr.appendChild(displaytableheaderstate);
    displaytabletr.appendChild(displaytableheadercountry);
    displaytabletr.appendChild(displaytableheaderpincode);
    displaytabletr.appendChild(displaytableheadergender);
    displaytabletr.appendChild(displaytableheaderfood);

    displaytablehead.appendChild(displaytabletr);

    var displaytabletrval = document.createElement("tr");
    var displaytableheaderfirstnameval = document.createElement("th");
    displaytableheaderfirstnameval.textContent = document.getElementById("first-name").value;;
    var displaytableheaderlastnameval = document.createElement("th");
    displaytableheaderlastnameval.textContent = document.getElementById("last-name").value;
    var displaytableheaderaddressval = document.createElement("th");
    displaytableheaderaddressval.textContent = document.getElementById("addressess").value;
    var displaytableheaderstateval = document.createElement("th");
    displaytableheaderstateval.textContent = document.getElementById("statename").value;
    var displaytableheadercountryval = document.createElement("th");
    displaytableheadercountryval.textContent = document.getElementById("countryname").value;
    var displaytableheaderpincodeval = document.createElement("th");
    displaytableheaderpincodeval.textContent = document.getElementById("pincodenum").value;
    var displaytableheadergenderval = document.createElement("th");
    displaytableheadergenderval.textContent = gensel;
    var displaytableheaderfoodval = document.createElement("th");
    displaytableheaderfoodval.textContent = foodsel;

    displaytabletrval.appendChild(displaytableheaderfirstnameval);
    displaytabletrval.appendChild(displaytableheaderlastnameval);
    displaytabletrval.appendChild(displaytableheaderaddressval);
    displaytabletrval.appendChild(displaytableheaderstateval);
    displaytabletrval.appendChild(displaytableheadercountryval);
    displaytabletrval.appendChild(displaytableheaderpincodeval);
    displaytabletrval.appendChild(displaytableheadergenderval);
    displaytabletrval.appendChild(displaytableheaderfoodval);

    displaytablebody.appendChild(displaytabletrval);
    displaytable.appendChild(displaytablehead);
    displaytable.appendChild(displaytablebody);

    var styles = document.createElement("style");
    styles.setAttribute("type", "text/css");
    styles.innerHTML = `
th, td {
    border: 2px solid black;
    padding: 8px;
    text-align: left;
  }

`   

   
    document.head.appendChild(styles)
    // showele.appendChild(displaytable);



    showele.appendChild(displaytable);
}

submitbtn.addEventListener("click", tabledisplayval);


