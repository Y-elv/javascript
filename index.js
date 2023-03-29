// const para =document.createElement("a")
// para.innerHTML="google";
// para.href="www.youtube.com";
// let x=document.getElementById("anchor");
// x.appendChild(para)
console.log("hello")

const main =document.createElement("div")
main.id="main";
 const  test=document.createElement("h3")
 test.id="test"
 test.innerHTML="hello world"
 
 
 const  para=document.createElement("p")
 para.innerHTML="today are learning practinal"
 

 const  para1=document.createElement("p")
 para1.id="hash"
 para1.innerHTML="make a progress"

 
 const  span=document.createElement("span")
 
 span.innerHTML="some text"

 
 const  a=document.createElement("a")
 a.id="link"
 a.href="./about.html"
 a.innerHTML="About page"
 
 main.appendChild(test)
main.appendChild(para)
main.appendChild(para1)
main.appendChild(span)
main.appendChild(a)
console.log(main)



const img=document.createElement("img")
img.id="img1"
img.src="9.PNG"
console.log(img)

const anchol=document.createElement("div")
anchol.class="anchol"

const h1=document.createElement("h1")
h1.innerHTML="javascript is powerfull"


document.body.appendChild(main)
document.body.appendChild(img)
document.body.appendChild(anchol)
document.body.appendChild(h1)


const save=document.getElementById("save");
// save.addEventListener("click",()=>{
//     console.log("hello")
// })

save.addEventListener("click",()=>{
    console.log("hello double")
})