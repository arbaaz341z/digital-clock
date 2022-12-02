let hrs=document.getElementById("hrs");
let  mins=document.getElementById("mins");
let secs=document.getElementById("secs");


setInterval(function () {
let a = new Date()
let h = a.getHours()
let m = a.getMinutes()
let s = a.getSeconds()
let d = a.getDate()
  hrs.innerHTML=h
  mins.innerHTML=m
  secs.innerHTML=s

}, 1000);