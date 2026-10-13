const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");

// Show or hide password
togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";

  passwordInput.type = isPassword ? "text" : "password";
  togglePassword.textContent = isPassword ? "Hide" : "Show";
  togglePassword.setAttribute(
    "aria-label",
    isPassword ? "Hide password" : "Show password"
  );
});

// Display a message
function showMessage(text, type) {
  message.textContent = text;
  message.className = type;
}

// Validate and submit the form
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!emailInput.checkValidity()) {
    showMessage("Please enter a valid email address.", "error");
    emailInput.focus();
    return;
  }

  if (password.length < 8) {
    showMessage(
      "Password must contain at least 8 characters.",
      "error"
    );
    passwordInput.focus();
    return;
  }

  // Demo only: no real authentication is performed.
  showMessage(
    "Form validated! Connect a backend to log in securely.",
    "success"
  );
});

// Demo links
document.getElementById("forgotLink").addEventListener("click", (event) => {
  event.preventDefault();
  showMessage("Connect your password-reset page here.", "error");
});

document.getElementById("signupLink").addEventListener("click", (event) => {
  event.preventDefault();
  showMessage("Connect your registration page here.", "error");
});