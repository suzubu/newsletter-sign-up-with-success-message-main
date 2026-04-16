const signUpForm = document.querySelector(".sign-up-form");
const emailInput = document.querySelector("#email");
const dismissBtn = document.querySelector(".dismiss-btn");
const userEmail = document.querySelector(".user-email");
const successMsg = document.querySelector(".success-message");
const main = document.querySelector("main");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!emailInput.validity.valid) {
    emailInput.classList.add("invalid");
    return;
  }

  userEmail.textContent = emailInput.value;
  main.classList.add("hidden");
  successMsg.classList.remove("hidden");
});

emailInput.addEventListener("input", () => {
  emailInput.classList.remove("invalid");
});

dismissBtn.addEventListener("click", () => {
  emailInput.value = "";
  emailInput.classList.remove("invalid");
  main.classList.remove("hidden");
  successMsg.classList.add("hidden");
});
