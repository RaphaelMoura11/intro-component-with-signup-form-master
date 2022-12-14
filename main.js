function Submit() {
    validateFirstName();

    validateLastName();

    validateEmail();

    validatePassword();
}

function validateFirstName() {
    var firstName = document.getElementById("first-name");
    if (firstName.value == "") {
        firstName.style.border = "2px solid hsl(0, 59%, 64%)";
        firstName.placeholder = "";
        document.getElementById('error-first-name').style.display = "block";
        document.getElementById("alert-icon-first-name").style.color = "hsl(0, 100%, 74%)";

    } else {
        firstName.style.border = "1px solid hsl(246, 25%, 77%)";
        document.getElementById('error-first-name').style.display = "none";
        document.getElementById("alert-icon-first-name").style.color = "rgba(0, 0, 0, 0)";
    }
}

function validateLastName() {
    var lastName = document.getElementById("last-name");
    if (lastName.value == "") {
        lastName.style.border = "2px solid hsl(0, 59%, 64%)";
        lastName.placeholder = "";
        document.getElementById('error-last-name').style.display = "block";
        document.getElementById("alert-icon-last-name").style.color = "hsl(0, 100%, 74%)";
    } else {
        lastName.style.border = "1px solid hsl(246, 25%, 77%)";
        document.getElementById('error-last-name').style.display = "none";
        document.getElementById("alert-icon-last-name").style.color = "rgba(0, 0, 0, 0)";
    }
}

function validateEmail() {
    var email = document.getElementById("email");
    if (!validateFormatEmail(email.value)) {
        email.style.border = "2px solid hsl(0, 59%, 64%)";
        email.placeholder = 'email@example.com';
        document.getElementById('error-email').style.display = "block";
        document.getElementById("alert-icon-email").style.color = "hsl(0, 100%, 74%)";
    } else {
        email.style.border = "1px solid hsl(246, 25%, 77%)";
        email.placeholder = 'Email Address';
        document.getElementById('error-email').style.display = "none";
        document.getElementById("alert-icon-email").style.color = "rgba(0, 0, 0, 0)";
    }
}

function validateFormatEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePassword() {
    var password = document.getElementById("password");
    if (password.value == "") {
        password.style.border = "2px solid hsl(0, 59%, 64%)";
        password.placeholder = "";
        document.getElementById('error-password').style.display = "block";
        document.getElementById("alert-icon-password").style.color = "hsl(0, 100%, 74%)";
    } else {
        password.style.border = "1px solid hsl(246, 25%, 77%)";
        password.placeholder = "Password";
        document.getElementById('error-password').style.display = "none";
        document.getElementById("alert-icon-password").style.color = "rgba(0, 0, 0, 0)";
    }
}