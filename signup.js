const form=document.getElementById("myform");
let arr=[]
form.addEventListener('submit',(e)=>{
    e.preventDefault()
  // add event in () and and this line of event.preventDefault()
   let username=form.username.value;
    let password=form.password.value;
    let email=form.email.value;
  let confirm=form.confirm.value;
    console.log(password,email,username,confirm)
  
console.log("hello")
let person={
    username:username,
    password:password,
    email:email,
    confirm:confirm

}
arr.push(person)
console.log(arr)
localStorage.setItem('user',JSON.stringify(arr))


})