//  q2

var form =document.getElementById('form')

    let changeBgColor = () => {
        username.style.backgroundc= "oranage";
        Passowrd.style.background = "cafie";
    }
    let returnColor = () => {
        username.style.background = "gray";
        Passowrd.style.background = "blue";
    }
  
  form.addEventListener('mouseover', changeBgColor);
  form.addEventListener('mouseleave', returnColor);

  form.addEventListener('submit',function(event){
     event.preventDefault()
     var username =document.getElementById('username').value
     console.log("the name is :" + "" + username)

     var Passowrd =document.getElementById('Passowrd').value
     console.log("the passowrd is :" + "" +Passowrd)

  })
 //q1
     function chanageImageSize(){

        let image = document.getElementById(image)
        image.style.width = "200px";
        image.style.height = "120vh"
     }

        let nameDiv = document.getElementById("buttons");
        let doEventBtn = document.getElementById("doEvent");
        let stopEventBtn = document.getElementById("stopEvent");
        // set the handler 
        let chanageImageHandler = () => {
            buttons.chanageImage = Math.random()
        }
        // set the event 
        doEventBtn.addEventListener('click', changeImageHandler);
        //set the remove handler
        let removeHandler = () => {
            doEventBtn.removeEventListener('click', changeImageHandler)
        }
        // set the remove 
        stopEventBtn.onclick = removeHandler;



  //q3

  let body = document.getElementById('body');
   
    let section = document.createElement("div");
    document .body.appendChild(section);

    for (var i = 0; i < 3; i++) {
        var container = document.getElementById("container");
        container.innerHTML = '<div class="box"></div>';
        //elements
        var div = document.createElement('div1');
        var title = document.createElement('h1');
        var price = document.createElement('p');
        var  img  = document.createElement('img');

        //content
        let priceContent =document.createTextNode('price') ;
        let head = document.createTextNode('title');
        img.src = 'p1.jpg';
        title.appendChild(head);
        priceContent.appendChild(price);







    div.appendChild(title);
    div.appendChild(priceContent);
    div.appendChild(img);

    div.appendChild(div);

     

     }
     
     Element()
    