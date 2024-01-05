// IKKE I BRUG

const validate = (form) => {
    console.log("dette er fra vores form ", form);

    let errors = [];

    console.log(form.fname.value);
    if (form.fname.value === "") {
        errors.push("Fornavn er et påkrævet felt\n");
    }

    console.log(form.lname.value);
    if (form.lname.value === "") {
        errors.push("Efternavn er et påkrævet felt\n");
    }

    console.log(form.email.value);
    if (form.email.value === "") {
        errors.push("Email er et påkrævet felt\n");
    }
    else if (!isValidEmail(email)) {
        errors.push('Email er ikke i korrekt format.');
    }

    if (form.password.value.length < 5) {
        errors.push("Password skal være på mindst 5 karakterer!\n");
    }

    if (form.password.value !== form.confirmPassword.value) {
        errors.push("Password & confirmPasword er ikke ens\n");
    }
    // if (form.password.value.length < 5) {
    //   errors.push("Password skal være på mindst 5 karakterer!\n");
    // }
    if (errors.length > 0) {
        console.log("Antal af fejl er ", errors.length);
        let msg = "Følgende fejl blev fundet: \n\n";
        for (let i = 0; i < errors.length; i++) {
            msg += errors[i];
        }
        alert(msg);
        return false;
    }

    return true;
    function isValidEmail(email) {
        var emailRegex = /^[^\s]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
};



//Get form element
var form = document.getElementById("MyForm");
function submitForm(event) {

    //Preventing page refresh
    event.preventDefault();
}

//Calling a function during form submission.
form.addEventListener('submit', submitForm);