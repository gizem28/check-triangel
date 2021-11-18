const side1= document.querySelector('.side1');
const side2= document.querySelector('.side2');
const side3= document.querySelector('.side3');
const button=document.querySelector('.btn');
const demo =document.querySelector('.demo');

let a=parseInt(side1.value);
let b=parseInt(side2.value);
let c=parseInt(side3.value);

button.addEventListener('click',()=>{
if(a<=0 || b<=0 || c<=0) {
        demo.innerHTML='Please enter positive numbers';
}else{
    if (a==b || a==c || b==c) {
        demo.innerHTML="This is a isosceles triangel!";

    }else if (a==b && b==c) {
        demo.innerHTML="This is a isosceles triangel!";

    }else if (a!=b && a!=c && b!=c) {
        demo.innerHTML="This is a scalene triangel!";
    }
}
})
