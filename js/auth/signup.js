//implémenter le JS de ma page

const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PreNomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputPasswordInput = document.getElementById("ValidatePasswordInput");

inputNom.addEventListener("keyup", validateForm);
inputPreNom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputPasswordInput.addEventListener("keyup", validateForm);

function validateForm(){
    validateRequired(inputNom);
    validateRequired(inputPreNom);
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        //Si la valeur est différente de rien : c'est ok
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
            //c'est pas ok
    }
}