const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");
      passwordFields = document.querySelectorAll(".password");


      let passwordsMatch = false;

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault();
       forms.classList.toggle("show-signup");
    
    })
})

// Отримати посилання на обидва поля паролів
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const password3 = document.getElementById("password3");
const emailInput = document.querySelector(".email");
const passwordError1 = document.getElementById("errorText");
const passwordError3 = document.getElementById("errorText");


// Додати обробник події "input" до обох полів паролів
password1.addEventListener("input", checkPasswords);
password2.addEventListener("input", checkPasswords);
password3.addEventListener("input", checkPasswordslen);

// Функція для перевірки паролів
function checkPasswords() {
    const password1Value = password1.value;
    const password2Value = password2.value;
    
    const errorText = document.getElementById("errorText");

    // Перевірка, чи паролі співпадають
    if (password1Value === password2Value) {
        // Паролі співпадають, прибрати повідомлення про помилку
        errorText.innerText = "";
    } else {
        // Паролі не співпадають, вивести повідомлення про помилку
        errorText.innerText = "Паролі не співпадають!";
    }
}

// Функція для перевірки паролів та обмеження символів
function checkPasswordslen() {
    const password3Value = password3.value;
   

    // Перевірка, чи паролі відповідають обмеженню на кількість символів (8-20 символів)
    if (password3Value.length >= 8 && password3Value.length <= 20 ) {
        // Паролі відповідають обмеженню, прибрати повідомлення про помилку
        passwordError3.innerText = "";
    
        
    } else {
        // Паролі не відповідають обмеженню, вивести повідомлення про помилку
        passwordError3.innerText = "Пароль повинен містити від 8 до 20 символів.";
        
        
    }
}


const emailError = document.getElementById("email-error");
// Додати обробник події "input" до поля email
emailInput.addEventListener("input", checkEmail);

// Функція для перевірки email і обмеження символів
function checkEmail() {
    const emailValue = emailInput.value;
    const emailError = document.querySelector(".email-error");

    // Використовуємо регулярний вираз для перевірки правильності email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (emailPattern.test(emailValue)) {
        // Перевірка, чи email не перевищує 40 символів
        if (emailValue.length <= 40) {
            emailError.innerText = "";
        } else {
            emailError.innerText = "Email не повинен містити більше 40 символів.";
        }
    } else {
        emailError.innerText = "Введіть правильний email";
    }
}
