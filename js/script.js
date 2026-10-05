const buttons = document.querySelectorAll(".offer-btn");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        const target = button.dataset.target;
        const offer = document.getElementById(target);

        offer.classList.toggle("open");

        if (offer.classList.contains("open")) {
            button.textContent = "Skrýt nabídku";
        } else {
            button.textContent = "Zobrazit nabídku";
        }

    });

});


const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    message.textContent =
        "Děkujeme za zprávu. Brzy se vám ozveme.";

    form.reset();

});