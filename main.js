let panel1 = document.getElementById("panel1");
let panel2 = document.getElementById("panel2");
let panel3 = document.getElementById("panel3");
let panel4 = document.getElementById("panel4");
let panel5 = document.getElementById("panel5");
let panel6 = document.getElementById("panel6");
let panel7 = document.getElementById("panel7");
let panel8 = document.getElementById("panel8");

function showPanel(panelToShow) {
  
    panel1.style.display = "none";
    panel2.style.display = "none";
    panel3.style.display = "none";
    panel4.style.display = "none";
    panel5.style.display = "none";
    panel6.style.display = "none";
    panel7.style.display = "none";
    panel8.style.display = "none";

  
    panelToShow.style.display = "block";
}


var slider = document.getElementById("myRange");

// Update when slider changes
slider.oninput = function() {
  // Show the appropriate panel based on slider value
  let panelNumber = Math.ceil(this.value / 12.5); // Maps 1-100 to panels 1-8
  if (panelNumber > 8) panelNumber = 8;
  if (panelNumber < 1) panelNumber = 1;
  
  let panelToShow = document.getElementById("panel" + panelNumber);
  showPanel(panelToShow);
  
  // Zoom text based on slider value
  let zoomLevel = 1 + (this.value / 100) * 0.5; // Maps 1-100 to zoom 1-1.5
  panelToShow.style.fontSize = (40 * zoomLevel) + "px";
}