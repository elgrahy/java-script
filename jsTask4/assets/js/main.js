    //Q3

    var arry=[10,30,-5,13,6,55];

    console.log(Math.max.apply(null,arry));
    console.log(Math.min.apply(null,arry));
    console.log(arry.sort());
    console.log(arry.reverse());


//Q2

  var student = ["mohamed","belal"];
  var hobby = ["football" , "swwimmming"];

    student.push("30");
    console.log(student);
    student.splice(2,0,30);
    console.log(student);


    student.push("Egypt");
    console.log(student);
    student.splice(5,0,"Egypt");
    console.log(student);

    student.unshift("grade2");
    console.log(student);
    student.splice(7,0,"grade2");


    student.splice(3,0,88,79,66);
    console.log(student);


    console.log(student.concat(hobby));


    console.log(student.reverse());


//Q1

var firstName = "ahmed2020";
var lastName = "belal";


     firstName.slice(0,5);
    console.log(firstName.length);
    firstName.charAt("m");
    console.log(firstName.includes("z"));
    firstName.replace("ahmed2020" , "mohamed");



