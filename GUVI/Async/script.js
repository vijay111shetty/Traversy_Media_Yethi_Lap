var elementare = document.getElementById("area");
// elementare.textContent = "1";
// console.log("1")

var num = 10;
var one = (cb=()=>{})=>{
	num--;
    // elementare.textContent = num;
    // elementare.innerHTML = "<h1>Happy independence day</h1>"
    // console.log(num)
	cb();
}

var two = (cb=()=>{})=>{
	num--;
    setTimeout(()=>{
        elementare.textContent = num;
        
        // console.log(num)    
	    cb();
    },1000)
    // elementare.textContent += num;
    // console.log(num)    
	// cb();
}
var three = (cb=()=>{})=>{
	num--;
    setTimeout(()=>{
        elementare.textContent = num;
        // console.log(num)    
	    cb();
    },1000)
}
var four = (cb=()=>{})=>{
	num--;
    setTimeout(()=>{
        elementare.textContent = num;
        // console.log(num)    
	    cb();
    },1000)
}
var five = (cb=()=>{})=>{
	num--;
    setTimeout(()=>{
        elementare.textContent = num;
        // console.log(num)    
	    cb();
    },1000)
}
var six = (cb=()=>{})=>{
	num--;
    setTimeout(()=>{
        elementare.textContent = num;
        // console.log(num)    
	    cb();
    },1000)
}
var seven = (cb=()=>{})=>{
	num--;
    setTimeout(()=>{
        elementare.textContent = num;
        // console.log(num)    
	    cb();
    },1000)
}
var eight = (cb=()=>{})=>{
	num--;
    setTimeout(()=>{
        elementare.textContent = num;
        // console.log(num)    
	    cb();
    },1000)
}
var nine = (cb=()=>{})=>{
	num--;
    setTimeout(()=>{
        elementare.textContent = num;
        // console.log(num)    
	    cb();
    },1000)
}
var ten = (cb=()=>{})=>{
	num--;
    setTimeout(()=>{
        elementare.textContent = num;
        elementare.innerHTML = "Happy Independence day"
        // console.log(num)    
	    cb();
    },1000)
}

// one(two(three(four(five(six(seven(eight(nine(ten())))))))))
// console.log(num)

one(() => {
    two(() => {
      three(() => {
        four(() => {
          five(() => {
            six(() => {
              seven(() => {
                eight(() => {
                  nine(() => {
                    ten();
                  });
                });
              });
            });
          });
        });
      });
    });
  });


// if(elementare.textContent === "0"){
//     elementare.innerHTML = "<h1>Happy independence day</h1>"
// }
