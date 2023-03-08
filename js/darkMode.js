const bsIcon = document.querySelector("#toggleMode");
const body = document.body;

function darkMode() {
  this.classList.toggle("bi-brightness-high");
  if(this.classList.toggle("bi-moon-fill")){
    body.classList.toggle("dark")
  }
}




bsIcon.addEventListener("click", darkMode)