const slidebar = () => {
  console.log("slidebar")

  var overlay = document.querySelector(".overlay")
  var menu = document.querySelector(".menu")
  var menuBtn = document.querySelector("#menuBtn")

  menuBtn.addEventListener("click", () => {
    overlay.classList.toggle("active")
    menu.classList.toggle("active")
  })

}

window.addEventListener("DOMContentLoaded", slidebar)