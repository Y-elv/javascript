const savu=document.getElementById("save");
savu.addEventListener("click",()=>{
    console.log("hello")
})

savu.addEventListener("dblclick",()=>{
    // alert("hello double")
})
const form=document.getElementById("myform");

form.addEventListener("submit",(event)=>{
    event.preventDefault();// add event in () and and this line of event.preventDefault()
    let text=form.username.value;
    let password=form.pswd.value;
     let total=text +' ' + 'and' + ' ' + password
    //  alert(total)

    if(text == ""){
        alert("plz fill")
    }
    form.reset();   // then to clear your code 
})



