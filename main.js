const signUpForm = document.querySelector(".sign-up-form");
const emailInput = document.querySelector("#email");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!emailInput.validity.valid) {
    emailInput.classList.add("invalid");
    return;
  }

  // valid — proceed to success
});

emailInput.addEventListener("input", () => {
  emailInput.classList.remove("invalid");
});
