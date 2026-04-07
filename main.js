function log_in() {


    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user === "Optimus_Prime" && pass === "1986") {
        alert("Welcome back!");
    } else {
        alert("Password or Username is incorrect.");
     }
    }