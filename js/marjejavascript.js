/* Make the tags black and background white when hovering over */
var navbarButtons = document.querySelectorAll(".nav.navbar-nav a")
for (var i = 0; i < navbarButtons.length; i++) {
    var button = navbarButtons[i];

    var oldColor = button.style.color;
    var oldBg = button.style["background-color"];

    button.addEventListener("mouseover", function () {
        this.style.color = "black";
        this.style["background-color"] = "white";
    });
    button.addEventListener("mouseout", function () {
        this.style.color = oldColor;
        this.style["background-color"] = oldBg;
    });
}
/* Contact form */
var form = document.querySelector('form.contact-form');

var input_name = document.querySelector('form input[name=name]');
var input_email = document.querySelector('form input[name=email]');
var input_subject = document.querySelector('form input[name=subject]');
var input_message = document.querySelector('form textarea[name=message]');

form.addEventListener("submit", function (event) {
    var text = "YOU ENTERED:\n" +
        "Your name is " + input_name.value + "\n" +
        "Your email is " + input_email.value + "\n" +
        "Your subject is " + input_subject.value + "\n" +
        "Your message is " + input_message.value + "\n";
    alert(text)
});

/*On click of the green button, change the text of the button to a different text and 
the color of the button to a different colour*/

var greenButton = document.querySelector("a.green-btn");
greenButton.addEventListener("click", function (event) {
    event.preventDefault();

    this.innerText = "DONT KLICK ME!";
    this.style.backgroundColor = "#ffff";
    this.style.color = "#3333";
});

/*Link one of the div buttons to your public Facebook or Github profile*/
var blueButton = document.querySelector(".blue-btn");
blueButton.innerText = "MY PROFILE";
blueButton.href = "https://github.com/msalum";
