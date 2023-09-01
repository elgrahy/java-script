//Q2
 
 
  var customDate = new Date("2016-1-26");
  console.log(customDate);

  var d1 = new Date();
  console.log(d1);
  console.log(d1.getFullYear());

  var monthNum = d1.getMonth();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month =months[monthNum];
  console.log(months[x.getMonth()]);

  var x = new Date();
  console.log(x.getDay);

  var week_day = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  console.log(days[week_day.getDay()]);
  
  var msecond = new Date();
  console.log(msecond.getTime());

  var allIn1Var = new Date(2014, 1, 26, 10, 13, 20);
  console.log(allIn1Var);


//Q1




var product =[
     {
            id:1,
            title:"blouse",
            desc:"dfghjkl",
            quantity:10,
            oldPrice:500,
            amountOfDiscount:"10%", 
            discount:true,
            colors :"oranage",

     getPrice : function() {
                var numVal1 = Number(document.getElementById("oldPrice").value);
                var numVal2 = Number(document.getElementById("amountOfDiscount").value) / 100;
                var totalValue = numVal1 - (numVal1 * numVal2)
                document.getElementById("total").value = totalValue.toFixed(2);
            },
    
    getFullData : function (){
        return " title is : "+ this.title + "and we have" +this.quantity +" number in stock and the price is"+this.totalValue + "and we have these colors"+ this.colors
    }
        
},

     {
            id:2,
            title:"skirt",
            desc:"dfghjkl",
            quantity:10,
            oldPrice:1000,
            amountOfDiscount:"10%",
            discount:true,
            colors :"white",
    
    getFullData : function (){
        return " title is : "+ this.title + "and we have" +this.quantity +" number in stock and the price is"+this.totalValue + "and we have these colors"+ this.colors
    }
        
}
,

     {
            id:3,
            title:"t-shirt",
            desc:"dfghjkl",
            quantity:100,
            oldPrice:100,
            amountOfDiscount:"5%",
            discount:true,
            colors :"pink",
    
    getFullData : function (){
        return " title is : "+ this.title + "and we have" +this.quantity +" number in stock and the price is"+this.totalValue + "and we have these colors"+ this.colors
    }
        
}


]
console.log(product[0].getFullData());
