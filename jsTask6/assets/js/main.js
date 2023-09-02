


//q4

var x = 10;
var y=5;
console.log(Math.max);

//q5

function random(min,max){
    return Math.abs(Math.random())
   }
   console.log(random(10,20));

//q3

 var degrees = [55,77,15,54];
  if (degrees>50){

    console.log("fail")
  }
  else if(degrees<=50 && degrees>65){

    console.log("succeed")
  }

  else if(degrees<=65 && degrees>75){

    console.log("good")
  }

  else if(degrees<=75 && degrees>=85){

    console.log("very good")
  }
  else{

    console.log("excellent")
  }


  //q1

  var today = new Date();
  var day=today.getDay();
  var daylist= ["sun","mon","tuesday","wendnesday","thursday","fri"];
  console.log("Today is :" + daylist[day] + ".");

  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
   var prepand = (hour>=12)? "pm":"am";
    if (hour===0 && prepand===' PM ') 
    { 
    if (minute===0 && second===0)
    { 
    hour=12;
    prepand=' Noon';
    } 
    else
    { 
    hour=12;
    prepand=' PM';
    } 
    } 
    if (hour===0 && prepand===' AM ') 
    { 
    if (minute===0 && second===0)
    { 
    hour=12;
    prepand=' Midnight';
    } 
    else
    { 
    hour=12;
    prepand=' AM';
    } 
    } 
    console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

    //q2

    var width=hight=10;
    console.log(Math.pow(width,2));
