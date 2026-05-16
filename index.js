const nom=document.getElementById("identifiant");
const email=document.getElementById("email");
const password=document.getElementById("password");
const button=document.querySelector("button");

button.addEventListener("click",()=>{
    const nomValue=nom.value;
    const emailValue=email.value;
    const passwordValue=password.value;
    const user={
        nom:nomValue,
        email:emailValue,
        password:passwordValue
    };
    localStorage.setItem("user",JSON.stringify(user));
    if(!nomValue && !emailValue && !passwordValue){

        alert("Please fill in all fields.");
    } else if(!nomValue){
        alert("Please enter your name.");
    } else if(!emailValue){
        alert("Please enter your email.");
    }else if(!passwordValue){
        alert("Please enter your password.");
    }
    else if(passwordValue.length<6){
        alert("Password must be at least 6 characters long.");
    }
    else if(!emailValue.includes("@")){
        alert("Please enter a valid email address.");
    }
    
    else {
        alert("Name:"+nomValue+"\nEmail:"+emailValue+"\nPassword:"+passwordValue);
    }});