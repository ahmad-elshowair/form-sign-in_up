const signUpBtn = document.querySelector(".sign-up-btn"),
  signInBtn = document.querySelector(".sign-in-btn"),
  leftSide = document.querySelector(".left-side"),
  rightSide = document.querySelector(".right-side"),
  signUpSide = document.querySelector(".sign-up-side");

signUpBtn.addEventListener("click", () => {
  leftSide.style.transform = "translateX(-110%)";
  rightSide.style.transform = "translateX(-60%)";
  signUpSide.style.transform = "translateX(0)";
});

signInBtn.addEventListener("click", () => {
  leftSide.style.transform = "translateX(0)";
  rightSide.style.transform = "translateX(60%)";
  signUpSide.style.transform = "translateX(110%)";
});
