var mail =document.querySelector("#mail");
var password1 = document.querySelector("#password");
// var button1 = document.querySelector("#butt1");
var form1 = document.querySelector("#form");

let connexion = JSON.parse(localStorage.getItem("one"));
console.log(connexion);

form1.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(e);
    if (mail.value === connexion.email  && password1.value === connexion.password )
     {
        alert("merci");
        
    }else{
            alert("champs non comforme");
    }
})