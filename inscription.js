var nom = document.querySelector('#nom');
var prenom = document.querySelector('#prenom');
var email = document.querySelector('#mail');
var password = document.querySelector('#password');
var confirmer = document.querySelector('#confirmer');
var formulaire = document.querySelector('#formulaire')
console.log('rrrrr');

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    let user={
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        password:password.value,
        confirmer:confirmer.value
    }
    console.log(nom.value);
    if (password.value != confirmer.value) {
        alert('les mots de passe ne sont pas conforme')
    } else {
       
    }
    localStorage.setItem('one', JSON.stringify(user));
    console.log(user);
})