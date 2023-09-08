// item gonna take the value of the element who's dragging
let item;

// "dragstart" is the action to start the drag
document.addEventListener("dragstart", (e) => {
  item = e.target;
})

// "dragover" is the action when the element is moving
document.addEventListener("dragover", (e) => {
  //the action needs a preventDefault
  e.preventDefault();
})

//"drop" is when you let the element after dragging it
document.addEventListener("drop", (e) => {
  e.preventDefault();
  // the e.target is the element where we are
  if(e.target.getAttribute("data-draggable") == "target") {
    e.target.appendChild(item);
  }
})

document.addEventListener("dragend", () => item = null);