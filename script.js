// document.querySelector("button").addEventListener("click", function () {
//     alert("Appointment Booking Coming Soon!");
// });

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_4sk1lte",
            "template_tplzd6r",
            this
        ).then(function () {

            alert("Message sent successfully!");

            contactForm.reset();

        }).catch(function (error) {

            alert("Failed to send message.");

            console.log(error);

        });

    });
}