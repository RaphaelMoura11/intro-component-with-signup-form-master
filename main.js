function Submit() {
    validateFirstName();

    validateLastName();

    validateEmail();

    validatePassword();
}

function validateFirstName() {
    var firstName = document.getElementById("first-name");
    if (firstName.value == "") {
        document.getElementById('error-first-name').style.display = "block";
        firstName.style.border = "2px solid hsl(0, 59%, 64%)";

    } else {
        document.getElementById('error-first-name').style.display = "none";
        firstName.style.border = "1px solid hsl(246, 25%, 77%)";
    }
}

function validateLastName() {
    var lastName = document.getElementById("last-name");
    if (lastName.value == "") {
        document.getElementById('error-last-name').style.display = "block";
        lastName.style.border = "2px solid hsl(0, 59%, 64%)";
    } else {
        document.getElementById('error-last-name').style.display = "none";
        lastName.style.border = "1px solid hsl(246, 25%, 77%)";
    }
}

function validateEmail() {
    var email = document.getElementById("email");
    if (!validateFormatEmail(email.value)) {
        document.getElementById('error-email').style.display = "block";
        email.style.border = "2px solid hsl(0, 59%, 64%)";
        email.placeholder = 'email@example.com';
    } else {
        document.getElementById('error-email').style.display = "none";
        email.style.border = "1px solid hsl(246, 25%, 77%)";
        email.placeholder = 'Email Address';
    }
}

function validateFormatEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePassword() {
    var password = document.getElementById("password");
    if (password.value == "") {
        document.getElementById('error-password').style.display = "block";
        password.style.border = "2px solid hsl(0, 59%, 64%)";
    } else {
        document.getElementById('error-password').style.display = "none";
        password.style.border = "1px solid hsl(246, 25%, 77%)";
    }
}


