document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    var loginForm = document.getElementById("login");
  
    // Add a click event listener to the login button
    document.getElementById("log").addEventListener("click", function() {
      // Get the input values
      var username = document.getElementById("Uname").value;
      var password = document.getElementById("Pass").value;
  
      // Perform validation here
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
      // If validation passes
      if (emailRegex.test(username) && passwordRegex.test(password)) {
        // Show success message
        alert("You've logged into Mad Math!");
  
        // Reset the form
        loginForm.reset();
      }
      // If invalid email syntax
      else if (!emailRegex.test(username)) {
        alert("Please insert a valid email.");
      }
      // If invalid password syntax
      else if (!passwordRegex.test(password)) {
        alert("Please insert a valid password.");
      }
    });
  });