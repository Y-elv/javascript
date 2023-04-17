let points=[1,45,89,3,0,100,2];

document.querySelector('#screen').innerHTML=points;
points.sort();
let y=document.querySelector('#sort1');
y.addEventListener("click",()=>{
    document.querySelector('#screen').innerHTML=points;
})
let m=document.querySelector('#sort2');

m.addEventListener('click',function myFunction2() {
    points.sort(function(a, b){return a - b});
    document.querySelector('#screen').innerHTML=points;
  })
  


