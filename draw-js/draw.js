const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");
const resetAllBtn = document.getElementById("resetAll");

// first we have to get the position of the mouse inside the canvas
const getPos = (e) => {
  // the method getBoundingClientRect() can be used to detect the position of the mouse inside the element
  const rect = canvas.getBoundingClientRect();
  // wi return an object
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
}

// second, we have to follow the mouse move
const getMouseMove = (e) => {
  // we call the previous function to get the position
  const mousePos = getPos(e);
  // the line is created with the datas from the object returned
  ctx.lineTo(mousePos.x, mousePos.y);
  // we give a stroke, color and width
  ctx.stroke();
  ctx.strokeStyle = "rgba(100, 100, 200, 0.5)";
  ctx.lineWidth = 5;
}

// we put an event to the mouse down
canvas.addEventListener("mousedown", (e) => {
  e.preventDefault();

  // we call the previous function to get the position
  const mousePos = getPos(e);
  
  // we begin the path 
  ctx.beginPath();
  ctx.moveTo(mousePos.x, mousePos.y);
  // we call the even when mouse is moving for drawing
  canvas.addEventListener("mousemove", getMouseMove);
  // we remove the event if the mouse is up
  canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", getMouseMove);
  });
});

// after all we can clear the canvas with the clearRect method
resetAllBtn.addEventListener("click", () => {
 ctx.clearRect(0, 0, canvas.width, canvas.height);
})