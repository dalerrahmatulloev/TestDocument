let dialog = document.querySelector(".dialog");
let button = document.querySelector(".button");
let closeButton = document.querySelector(".closeButton");

button.onclick = () => {
  dialog.showModal();
};

closeButton.onclick = () => {
  dialog.close();
};
