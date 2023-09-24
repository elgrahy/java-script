//open form model andclose
let addNewBtn =document.querySelector(".addNew");
let closeFormBtn = document.querySelector(".addNewContact .close");
let formSection = document.querySelector(".form");
let contactForm = document.querySelector(".addNewContact");

addNewBtn.addEventListener('click',()=>{
    formSection.classList.add("overlay");
    contactForm.style.display = "block";
});
closeFormBtn.addEventListener('click',()=>{
    formSection.classList.remove("overlay");
    contactForm.style.display = "none";
});
//creat array to store data
let savedData = localStorage.getItem("contact");
//
let contactList =[];
//select the input of the form
let contactFormName = document.getElementById("contact_form_name");
let contactFormPhone = document.getElementById("contact_form_phone");
let contactFormEmail = document.getElementById("contact_form_email");
let contactFormAddress = document.getElementById("contact_form_address");
//get last id
let lastContactId = contactList.length;
//creat a fun to push new contact into the array
let newContact = () =>{
    contactList.push({
        contactId: lastContactId +=1,
        contactName :contactFormName.value,
        contactPhone : contactFormPhone.value,
        contactEmail : contactFormEmail.value,
        contactAddress : contactFormAddress.value
    });
    console.log(contactList);
}

//create render functuion to shoew data in the table
let contactTableTbody = document.getElementById("tbody");

let renderContacts = () =>{
    let trs = '';
    contactList.forEach(contact =>{
        trs += `
          <tr data-id= ${contact.contactId}>
                 <td>${contact.contactId}</td>
                <td>${contact.contactName}</td>
                <td>${contact.contactPhone}</td>
                <td>${contact.contactEmail}</td>
                <td>${contact.contactAddress}</td>
                <td class="ggreen">edit</td>
                <td class="red">delete</td> 
                </tr>
                `
    });

    contactTableTbody.innerHTML = trs;
}
//intial start in web page
renderContacts()

//reset value fun
let resetFormContact = () =>{
    contactFormName.value ='';
    contactFormPhone.value = '';
    contactFormEmail.value = '';
    contactFormAddress.value = '';

}
//handle save btn listener
let saveBtn = document.querySelector(".save");
 
let saveBtnHandler = () =>{
    newContact();
    localStorage.setItem("contact",contactList);
    resetFormContact();
    renderContacts();
    formSection.classList.remove("overlay"),
    contactForm.style.display = "none";
    console.log("add");
}
saveBtn.addEventListener('click', saveBtnHandler)

//logic to handle edit and delete
contactTableTbody.addEventListener('click', e=>{
    if(e.target.classList.contains("green")){
        let tr = e.target.parentElement;
        let id = tr.dataset.id;
        let index = id -1;

        contactFormName.value =contactList[id].contactName;
        contactFormPhone.value = contactList[id].contactPhone;
        contactFormEmail.value = contactList[id].contactEmail;
        contactFormAddress.value = contactList[id].contactAddress;
        console.log(contactList);
        formSection.classList.add("overlay");
        contactForm.style.display = "block";
        //update handeller
        let updateHandeler = () =>{
            //new
            console.log("edit")
            let updatedContact = {
            contactId :parseInt(id),
            contactName :contactFormName.value,
            contactPhone : contactFormPhone.value,
            contactEmail : contactFormEmail.value,
            contactAddress : contactFormAddress.value
                 
        }
            //chanage the old object with new object
            contactList[index] = updatedContact;
            localStorage.setItem("contact",JSON.stringify(contactList));
            //close the overlay and hide form
            formSection.classList.remove("overlay");
            contactForm.style.display = "none";
            //reset the form
            resetFormContact();
            //disply (render data)
            renderContacts();
            //listener handeler
            saveBtn.removeEventListener('click',updateHandeler);
            saveBtn.addEventListener('click',saveBtnHandler);

        }
       
        saveBtn.removeEventListener('click',saveBtnHandler);
        saveBtn.addEventListener('click',updateHandeler);
    }
    if(e.target.classList.contains("red")){
       let tr = e.target.parentElement;
       let id = tr.dataset.id;
       let index = parseInt(id) - 1;
       contactList.splice(index,1);
       localStorage.setItem("contact",JSON.stringify(contactList));
       renderContacts();
    }
});
//search logic
let searchInput = document.getElementById("search");
let form = searchInput.parentElement;
let trs = document.querySelectorAll('tbody tr');
form.addEventListener('submit' , e =>e.preventDefault());

searchInput.addEventListener('keyup' , ()=>{
    let searchInputValue = searchInput.value.toLowerCase();
    trs.forEach(tr =>{
        trName = tr.children[1].textContent.toLowerCase();
        if(trName.inclides(searchInputValue)){
            tr.style.display = "";
        }
        else{
            tr.style.display = "none";
        }
    })
});
