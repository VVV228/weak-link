
    
passwordFields = document.querySelectorAll(".password");


let passwordsMatch = false;

$(document).ready(function() {
    const forms = document.querySelector(".forms");
    const links = document.querySelectorAll(".link");
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    const password3 = document.getElementById("password3");
    password1.addEventListener("input", checkPasswords);
    password2.addEventListener("input", checkPasswords);
    password3.addEventListener("input", checkPasswordslen);
  const pwShowHide = $(".eye-icon");

  links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        forms.classList.toggle("show-signup");
        emailError.forEach(msg => {
            msg.innerText = "";
                
        })
    })
})

  pwShowHide.on("click", function() {
    const pwFields = $(this).closest(".forms").find(".password");

    pwFields.each(function() {
      if ($(this).attr("type") === "password") {
        $(this).attr("type", "text");
        $(this).siblings(".eye-icon").removeClass("bx-hide").addClass("bx-show");
      } else {
        $(this).attr("type", "password");
        $(this).siblings(".eye-icon").removeClass("bx-show").addClass("bx-hide");
      }
    });
  });
});


// pwShowHide.forEach(eyeIcon => {
//     eyeIcon.addEventListener("click", () => {
//         let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

//         pwFields.forEach(password => {
//             if (password.type === "password") {
//                 password.type = "text";
//                 eyeIcon.classList.replace("bx-hide", "bx-show");
//                 return;
//             }
//             password.type = "password";
//             eyeIcon.classList.replace("bx-show", "bx-hide");
//         })

//     })
// })


document.addEventListener('ready', ()=>{

})
// Отримати посилання на обидва поля паролів

const emailInput = document.querySelectorAll(".email");
const passwordError1 = document.getElementById("errorText");
const passwordError3 = document.getElementById("errorText1");
const emailError = document.querySelectorAll(".email-error");

// Додати обробник події "input" до обох полів паролів


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
    if (password3Value.length >= 8 && password3Value.length <= 20) {
        // Паролі відповідають обмеженню, прибрати повідомлення про помилку
        passwordError3.innerText = "";


    } else {
        // Паролі не відповідають обмеженню, вивести повідомлення про помилку
        passwordError3.innerText = "Пароль повинен містити від 8 до 20 символів.";


    }
}

// Додати обробник події "input" до поля email
emailInput.forEach(email => {
    email.addEventListener("input", checkEmail)
});
// Функція для перевірки email і обмеження символів
function checkEmail() {
    const emailValue = this.value;
    

    // Використовуємо регулярний вираз для перевірки правильності email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    emailError.forEach(msg => {
        if (emailPattern.test(emailValue)) {
            // Перевірка, чи email не перевищує 40 символів
            if (emailValue.length <= 40) {
                msg.innerText = "";
            } else {
                msg.innerText = "Email не повинен містити більше 40 символів.";
            }
        }
        else {
            msg.innerText = "Введіть правильний email";
        }
    })

}

