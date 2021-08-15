let email=document.querySelector('#emailInput');
let password=document.querySelector('#passInput');
let submit=document.querySelector('#submitBtn');
submit.addEventListener('click',function(){
    if(email.value=="sakib@gmail.com" && password.value=="password"){
       location.href="banking.html";
    }else{
        console.log("wrong")
    }
})