const nom=document.getElementById("identifiant");
const email=document.getElementById("email");
const password=document.getElementById("password");
const button=document.querySelector("button");

button.addEventListener("click",()=>{
    const nomValue=nom.value;
    const emailValue=email.value;
    const passwordValue=password.value;
    if(!nomValue || !emailValue || !passwordValue){
        alert("Please fill in all fields.");
    } else {
        alert("Name:"+nomValue+"\nEmail:"+emailValue+"\nPassword:"+passwordValue);
    }});