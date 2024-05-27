document.addEventListener("DOMContentLoaded", function() {

  const container = document.querySelector("#container");

  //Creating a grid of 16x16 divs inside a container
  let n = 0;
  while (n < 256) {
    const div = document.createElement("div");
    div.setAttribute("id", "gridDiv");
    container.appendChild(div);
    n++;
  }


});