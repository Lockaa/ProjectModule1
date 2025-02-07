document.getElementById("actualForm").addEventListener("submit", function(event) {
    // Get values of input fields
    
    let fName = document.getElementById("firstName").value.trim();
    let lName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    
    // Check if any input is empty
    if (fName === "" || lName === "" || email === "") { 
        
        alert("Please fill all fields.");
        event.preventDefault(); // Prevent form submission if any field is null (not filled)
    }
    else if (email.includes("@") && email.includes(".")) {
        alert("Submitted.");
    }
    else {
        alert("Please enter valid email.");
        event.preventDefault();
    }
});

document.getElementById("contactLink").addEventListener("click", function(event) {
    document.getElementById("firstName").focus();
});