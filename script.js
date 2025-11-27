function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("All fields must be filled out!");
    return false;
  }
  if (!email.includes("@")) {
    alert("Please enter a valid email address!");
    return false;
  }
  return true;
}