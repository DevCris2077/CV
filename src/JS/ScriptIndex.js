document.addEventListener("DOMContentLoaded", () => {
    const emailElement = document.getElementById("email");
    const phoneElement = document.getElementById("phone");

    emailElement.addEventListener("click", () => {
        alert("Email: " + emailElement.textContent);
    });

    phoneElement.addEventListener("click", () => {
        alert("Teléfono: " + phoneElement.textContent);
    });
});
