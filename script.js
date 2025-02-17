document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem("alertShown")) {
        alert("Welcome to Indrasena's Resume Page!");
        localStorage.setItem("alertShown", "true");
    }
});

