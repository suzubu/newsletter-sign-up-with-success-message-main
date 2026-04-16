document.addEventListener("DOMContentLoaded", () => {
  const signUpForm = document.querySelector(".sign-up-form");
  const emailInput = document.querySelector("#email");
  const errorMessage = document.querySelector(".error-message");
  const dismissBtn = document.querySelector(".dismiss-btn");
  const userEmail = document.querySelector(".user-email");
  const successMsg = document.querySelector(".success-message");
  const main = document.querySelector("main");

  if (!signUpForm || !emailInput || !errorMessage || !dismissBtn || !userEmail || !successMsg || !main) {
    console.warn("Sign-up form: one or more required elements not found. Script disabled.");
    return;
  }

  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!emailInput.validity.valid) {
      emailInput.classList.add("invalid");
      errorMessage.textContent = "Valid email required";
      errorMessage.focus();
      return;
    }

    userEmail.textContent = emailInput.value;
    main.classList.add("hidden");
    successMsg.classList.add("is-visible");
    successMsg.focus();
  });

  emailInput.addEventListener("input", () => {
    emailInput.classList.remove("invalid");
    errorMessage.textContent = "";
  });

  dismissBtn.addEventListener("click", () => {
    emailInput.value = "";
    emailInput.classList.remove("invalid");
    errorMessage.textContent = "";
    main.classList.remove("hidden");
    successMsg.classList.remove("is-visible");
    emailInput.focus();
  });
});