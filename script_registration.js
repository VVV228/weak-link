const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");
      passwordFields = document.querySelectorAll(".password");
    //   message = document.querySelector(".message");

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
    //    message = document.querySelector(".message");
    })
})

// Отримати посилання на обидва поля паролів
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

// Додати обробник події "input" до обох полів паролів
password1.addEventListener("input", checkPasswords);
password2.addEventListener("input", checkPasswords);

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
        errorText.style.color = "red";
    }
}
