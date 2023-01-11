const $btnUp = document.getElementById("up");

window.addEventListener("scroll", (e) => {
  let y = document.documentElement.scrollTop;

  if (y <= 100) {
    $btnUp.classList.add("hide");
    $btnUp.classList.remove("active");
  } else if (y >= 400) {
    $btnUp.classList.add("active");
    $btnUp.classList.remove("hide");
  }
});

document.addEventListener("DOMContentLoaded", (e) => {
  $btnUp.classList.add("hide");
});

document.addEventListener("click", (e) => {
  if (e.target === $btnUp || e.target.matches(".fa-arrow-up")) {
    // alert("Hola desde JS");
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }
});
