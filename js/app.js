const $ = document;
const html = $.documentElement;
const contextmenu = $.querySelector(".contextmenu");

// Show custom menu when user clikc R-click
$.addEventListener("contextmenu", function (event) {
  event.preventDefault(); // don't show the default right click menu
  let leftPosition = event.pageX;
  let topPosition = event.pageY;
  contextmenu.style = `visibility : visible; left:${leftPosition}px;top:${topPosition}px;transform:scale(1);`;
});

// Hide contextmenu when user press escape key
$.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (contextmenu.style.visibility === "visible") {
      contextmenu.style.visibility = "hidden";
      contextmenu.style.transform = "scale(0)";
    }
  }
});

// Hide contextmenu when user click outside of context menu
$.addEventListener("click", function (event) {
  if (event.target === $.body) {
    contextmenu.style.visibility = "hidden";
    contextmenu.style.transform = "scale(0)";
  }
});

// set a glassmorphism style to contextmenu and use color of desktop background
// get prettier and beautiful the project
