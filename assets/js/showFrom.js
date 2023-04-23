
// Showlogin when click add to cart
const overlay = document.getElementById("overlay");
const addButton = document.getElementById("add-button");
const closeForm = document.getElementById('close-login')

addButton.addEventListener("click", () => {
  overlay.style.display = "flex";
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.style.display = "none";
  }
});

closeForm.addEventListener("click", () => {
  overlay.style.display = "none";
});