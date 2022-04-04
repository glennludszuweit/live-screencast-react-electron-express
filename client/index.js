const ipcRenderer = require("electron").ipcRenderer;

window.onload = () => {};

const startCasting = () => {
  ipcRenderer.send("Casting");
  document.getElementById("start-casting").style.display = "none";
  document.getElementById("stop-casting").style.display = "block";
};

const stopCasting = () => {
  ipcRenderer.send("Later");
  document.getElementById("start-casting").style.display = "block";
  document.getElementById("stop-casting").style.display = "none";
};
