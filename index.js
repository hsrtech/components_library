const passwordField = document.getElementById("password");
const togglePassword = document.querySelector(".password-toggle-icon i");

togglePassword.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  }
});

// captcha 
const   captcha = document.querySelector(".captcha"),
        captchaInput = document.querySelector(".captcha input"),
        reloadBtn = document.querySelector(".reload-btn"),
        statusText = document.querySelector(".status-text"),
        checkBtn = document.querySelector(".check-btn");

let allCharacters = [
    "A", "B", "C", "D", "E", "F", 
    "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X",
    "Y", "Z", "a", "b", "c", "d",
    "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v",
    "w", "x", "y", "z", 0, 1, 2, 
    3, 4, 5, 6, 7, 8, 9
];

let captchaString = "";
function getcaptcha(){

    captchaString = "";

    for(let i = 0; i < 6; i++){
        let randomIndex = Math.floor(Math.random() * allCharacters.length);
        captchaString += allCharacters[randomIndex];
    }

    captcha.innerHTML = captchaString;
    statusText.innerHTML = "Please enter the characters you see above in the box below";
    captchaInput.value = "";
    captchaInput.focus();
}
getcaptcha();
reloadBtn.addEventListener("click", getcaptcha);

checkBtn.addEventListener("click", function(){
    if(captchaInput.value === captchaString){
        statusText.innerHTML = "Correct! You may proceed.";
    } else {
        statusText.innerHTML = "Incorrect. Please try again.";
    }
});

