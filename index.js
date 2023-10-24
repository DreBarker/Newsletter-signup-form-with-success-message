var errorMessage = false;
$(".container").hide();
var email = $("#email").val();


function checkEmail() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#email").val();

    if (pattern.test(email) && email !== "") {
        $("#wrapper").hide();
        document.querySelector(".confirm-email").innerHTML = "A confirmation email has been sent to " + email + ". Please open it and click the button inside to confirm your subscription.";

        $(".container").show();
        document.querySelector(".container").classList.add("show");

        document.querySelector(".invalid-email").classList.remove("show-error");
    } else {
        var invalidEmail = document.querySelector(".invalid-email");
        invalidEmail.classList.add("show-error");

        document.querySelector("#email").classList.add("border-error");
        errorMessage = true;
    }
}



function auto() {
    if (errorMessage == true) {

        document.querySelector("#email").classList.remove("border-error");

        errorMessage = false;
    }
}



var submit = document.querySelector("#subscribe-btn");
submit.addEventListener("click", checkEmail);

document.querySelector("#email").addEventListener("click", auto);



function back() {
    $(".container").hide();
    $("#wrapper").show();
}

var dismiss = document.querySelector(".dismiss-btn");
dismiss.addEventListener("click", back);
