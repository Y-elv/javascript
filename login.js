const form=document.getElementById("myform");
form.addEventListener('submit',(event)=>{
    event.preventDefault();// add event in () and and this line of event.preventDefault()
   
    let password=form.password.value;
    let email=form.email.value;
  
    console.log(password,email)
let arr=JSON.parse(localStorage.getItem('user')) || []
let fill = arr.filter((item)=> item.email===email && item.password===password)
if(fill.length !=0){ // here it will always keep one element which full fill that condition from filter
    console.log(`item found ${email}`)
}
else{
    console.log("item not found")
}
localStorage.setItem('email',email)
})