// const varName=setTimeout(()=>{
//     console.log("hello ")
//     window.location.href="http://www.instagram.com"
    
//     },1000)
// clearTimeout(varName) // for this you are clearing your timeout then nothing you will see .
let x = document.getElementById("btn")
const y = setInterval(()=>{
   alert("hello javascript")
  
    },3000)

    x.addEventListener("click",()=>clearInterval(y))
let a="data \"hello\" types ";
let b=2023 ;
let c= "0\7" ;
let d=false ;
let e=1.5 ;
let f= 10. ;
console.log((a));
console.log(typeof(b));
console.log((b));
console.log(c);
console.log(d);
console.log(e);
console.log(f);