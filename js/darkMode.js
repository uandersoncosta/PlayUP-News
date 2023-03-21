const bsIcon = document.querySelector("#toggleMode");
const body = document.body;

// function darkMode() {
//   this.classList.toggle("bi-brightness-high");
//   if(this.classList.toggle("bi-moon-fill")){
//     body.classList.toggle("dark")
//   }
// }

bsIcon.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    bsIcon.classList.replace('bi-moon-fill', "bi-brightness-high-fill")
    body.classList.replace('light', "dark")
  } else {
    bsIcon.classList.replace("bi-brightness-high-fill", "bi-moon-fill")
    body.classList.replace("dark", "light")
  }
})