document
  .getElementById("internshipApplicationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const skills = document.getElementById("skills").value;
    const message = document.getElementById("message").value;

    // Hide the form and display the success message
    document.getElementById("internshipApplicationForm").style.display = "none";
    document.getElementById("successMessage").classList.remove("hidden");

    // You can log the values or perform any other action needed here
    console.log(
      `Name: ${name}, Email: ${email}, Skills: ${skills}, Message: ${message}`
    );
  });
