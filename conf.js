
const form  = document.querySelector('#submit');

form.addEventListener('submit', function (event) {

    const name = form.elements['name'];
    const email = form.elements['email'];

    let fullName = name.value;
    let emailAddress = email.value;

    alert("Informacion Enviada" + "\nNombre: " + fullName + "\nEmail: " + emailAddress);
});