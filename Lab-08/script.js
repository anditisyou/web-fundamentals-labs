function nextWin() {
    alert("Welcome to the Exam Registration Form!");

    var candidate_name = prompt("Please enter your name:");
    if (!candidate_name) {
        alert("Name is required to proceed. Please try again.");
        return;
    }

    // Save the name in localStorage
    localStorage.setItem("candidateName", candidate_name);

    let proceed = confirm("Do you want to proceed to the registration form?");
    if (proceed) {
        window.location.href = "AdmitCard.html";
    } else {
        alert("You chose not to proceed. Returning to the main page.");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const candidateName = localStorage.getItem("candidateName");
    if (candidateName) {
        document.getElementById("candidateName").textContent = candidateName;
    }
});
