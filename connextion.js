let message = document.querySelector('.message')

var mail =document.querySelector("#mail");
var password1 = document.querySelector("#password");
// var button1 = document.querySelector("#butt1");
var form1 = document.querySelector("#form");

let connexion = JSON.parse(localStorage.getItem("users"));
console.log(connexion);

form1.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(e);
   for (let i = 0; i < connexion.length; i++) {
       const element = connexion[i];
        if (mail.value === connexion[i].email  && password1.value === connexion[i].password )
     {
        window.location.assign("monde.html")
        
        
    }else{
        message.innerHTML='E-mail ou mot de passe incorrect'
        message.style.color = 'red'
        message.style.textAlign = 'center'
        message.style.border = 'red 2px solid'
        message.style.borderRadius = '10px'
        message.style.opacity = '0.6'

    }
       
   }
})