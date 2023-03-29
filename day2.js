let birthdate=new Date("2002-04-16");
let day=birthdate.getDay();
let mon =birthdate.getMonth()
 let date= new Date();
 // variable things we need to use them later but imagine keep alert in variable  
 document.getElementById("test").innerHTML=day;
 let website1=window.location.port; 
let website=window.location.protocol; // to get adress of website
let h=window.history.length;
document.getElementById("back").innerHTML=h
document.getElementById("dres").innerHTML=website1;
document.getElementById("dress").innerHTML=website;
window.alert("damn") // just give a message
window.confirm("heloo") // its to ask user whether he needs or it or not or accept 
window.location.href="http://www.instagram.com"    //immediately to the insta plz use http 
window.location.replace("http://www.twitter.com") 