//Q2
   
    console.log(this); // in the main

      //return 

    function test(){
        console.log(this); 
        }
        test()
        //return test


    <button id="click">click</button>
    let click = document.getElementById("click");
    click.onclick = () => {
    console.log(this);
    };
    //  will return window


    <button id="click">click</button>
    let click = document.getElementById("click");
    click.onclick = function () {
    console.log(this);
    };
    // return button object


    const obj = {
        name : "ahmed",
        test : function(){
        console.log(this);
        }
        }
        obj.test()
        // return obj


    const obj = {
            name : "ahmed",
            test : ()=>{
            console.log(this);
            }
            }
            obj.test()

            //  return button object


    const obj = {
                name : "ahmed",
                test : ()=>{
                let test2 = ()=>{
                console.log(this);
                }
                test2()
                }
                }
                obj.test()
                
                // will return window


    const obj = {
                    name : "ahmed",
                    test : function (){
                    let test2 = ()=>{
                    console.log(this);
                    }
                    test2()
                    }
                    }
                    obj.test()


                    //  return obj


//Q1
 
const numbers = [2,3,-1,6.5,-17,55,12];


  //5

    const array = [2,3,-1,6.5,-17,55,12];
    const positiveNum = array.filter(array =>{
    return  array> 0
    });
    console.log(positiveNum);
 
 //6

    const everyIsBigger = [2,3,-1,6.5,-17,55,12];
    const EIsPassed = everyIsBigger.every(x => x > 0);
    console.log(EIsPassed);


 //7
    
    const singleIsBigger= [2,3,-1,6.5,-17,55,12];
    const SIsPassed = singleIsBigger.some(x => x > 0);
    console.log(SIsPassed);


 //1
  
    let sortedArray = [2,3,-1,6.5,-17,55,12];
    sortedArray.sort((a, b) => a - b);
    console.log("sorted array is :" + sortedArray);

 //3
  
    const x = [2,3,-1,6.5,-17,55,12];
    const sum = x.reduce((prevValue , currentValue)=>{
    return prevValue + currentValue ;
    })
    console.log("sum is :" + sum);

 //4

    
    const numbs = [10, 20, 30];
    const newArray = numbs.map((num, index, oNumbs) => {
    return num * 2;
    });
    console.log(newArray); 
    const newArray2 = numbs.forEach((num, index, oNumbs) => {
    return num * 2;
    }); 
    console.log(newArray2);
      
   
   