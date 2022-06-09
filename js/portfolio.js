let listOne = document.querySelectorAll(".list-one li");
let listImg = document.querySelectorAll(".images-one img");


listOne.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
  });

  function removeActive() {
    listOne.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    });
  }

  // Manage Imgs
function manageImgs() {
  listImg.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}