let userNumber = 0;

document.addEventListener("DOMContentLoaded", function() {

  const container = document.querySelector("#container");

// creation of a button
  const button = document.createElement("button");
  document.body.prepend(button);
  button.textContent = "START";
  button.addEventListener("click", () => {

//Reseting grid
    if (container.hasChildNodes() == true){
      const divToDelete = document.querySelectorAll("#rowDiv");

      for (let i = 0; i < divToDelete.length; i++) {
        divToDelete[i].remove();
      }
    }

// asking user for a number of squares
    userNumber = prompt("How many squares do you want to add per side for the new grid");
    userNumber = Number(userNumber);
    if (userNumber > 100) {
        alert("Can't add more than 100. Try again!");
        userNumber = 0;
    }
  
  const squareSize = Math.sqrt((500*500)/(userNumber*userNumber));

// Creating a grid of divs inside a container
  let n = 0;
  while (n < (userNumber * userNumber)) {
    const div = document.createElement("div");
    div.setAttribute("id", "rowDiv");
    container.appendChild(div);
    div.setAttribute("style", `background: black; height: ${squareSize}px; width: ${squareSize}px;`);

// Paint by hovering
    div.addEventListener("mousemove", () => {
        div.setAttribute("style", `background: yellow; height: ${squareSize}px; width: ${squareSize}px;`);
    });
      
    n++;
  }
  })
});