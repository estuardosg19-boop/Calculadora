let input1=document.getElementById("input1")
let input2=document.getElementById("input2")
let suma=document.getElementById("suma")
let resta=document.getElementById("resta")
let mult=document.getElementById("mult")
let div=document.getElementById("div")
let h1=document.getElementById("h1")

suma.addEventListener("click",r)
resta.addEventListener("click",r2)
Mult.addEventListener("click",r3)
div.addEventListener("click",r4)

function r(){
let op1=Number(input1.value)
let op2=Number(input2.value)
let resultado=op1+op2
h1.textContent=resultado
}

function r2(){
let op3=Number(input1.value)
let op4=Number(input2.value)
let resultado2=op3-op4
h1.textContent=resultado2
}

function r3(){
let op5=Number(input1.value)
let op6=Number(input2.value)
let resultado3=op5*op6
h1.textContent=resultado3
}

function r4(){
let op7=Number(input1.value)
let op8=Number(input2.value)
let resultado4=op7+op8
h1.textContent=resultado4
}