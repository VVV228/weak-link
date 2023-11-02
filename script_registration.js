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

// // Додамо подію для перевірки паролів
// passwordFields[1].addEventListener("input", () => {
//     if (passwordFields[0].value === passwordFields[1].value) {
//         passwordsMatch = true;
//         // Повідомлення про співпадання паролів
//         message.textContent = "Паролі співпадають";
//     } else {
//         passwordsMatch = false;
//         // Повідомлення про невідповідність паролів
//         message.textContent = "Паролі не співпадають";
//     }
// });

// // Додамо подію для натискання кнопки "Зареєструватись"
// registerButton.addEventListener("click", (e) => {
//     if (!passwordsMatch) {
//         e.preventDefault(); // Блокуємо перехід, якщо паролі не співпадають
//         message.textContent = "Будь ласка, виправте помилку в паролях.";
//     }
// });