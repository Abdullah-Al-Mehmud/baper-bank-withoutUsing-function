document.getElementById("btn-submit").addEventListener("click", function () {
  // getting the email input value form user
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  console.log(email);
  // getting the password input value form user
  const passwordField = document.getElementById("password");
  const password = passwordField.value;
  console.log(password);

  // verifying email and password...WARNING: never use this system in real life validation...this is for practice purpose
  if (email === "" && password === "") {
    let invalid = document.getElementById("invalid");
    invalid.innerText = "Enter Email and Password";
  } else {
    if (email === "timehmud121@gmail.com" && password === "mehmud") {
      // switched to another page
      window.location.href = "bank.html";
    } else {
      // console.log("not a valid user");
      let invalid = document.getElementById("invalid");
      invalid.innerText = "invalid User";
    }
  }
});
