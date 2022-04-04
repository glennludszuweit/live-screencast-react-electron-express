const ipcRenderer = require("electron").ipcRenderer;

window.onload = () => {};

const startCasting = () => {
  ipcRenderer.send("start-casting");
  document.getElementById("start").style.display = "none";
  document.getElementById("stop").style.display = "block";
};

const stopCasting = () => {
  ipcRenderer.send("stop-casting");
  document.getElementById("start").style.display = "block";
  document.getElementById("stop").style.display = "none";
};
