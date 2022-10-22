function CloseCart() {
  if (document) {
    const lateralCart = document.querySelector("#lateralCart") as any;
    lateralCart.style.transform = "translateX(100%)";
    lateralCart.classList.remove("active");
  }
}

function OpenCart() {
  if (document) {
    const lateralCart = document.querySelector("#lateralCart") as any;
    lateralCart.style.transform = "translateX(0%)";
    lateralCart.classList.add("active");
  }
}

export { CloseCart, OpenCart };
