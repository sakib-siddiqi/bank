let email=document.querySelector('#emailInput');
let password=document.querySelector('#passInput');
let submit=document.querySelector('#submitBtn');
// login
submit.addEventListener('click',function(){
    if(email.value=="sakib@gmail.com" && password.value=="password"){
       location.href="banking.html";
       clearFuild([email,password]);
    }else{
        console.log("wrong")
    }
})
// clear fuild
function clearFuild(fuild){
    fuild.forEach(function(e){e.value=""});
}
