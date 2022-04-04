const ipcRenderer = require("electron").ipcRenderer;
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

window.onload = () => {
  ipcRenderer.on("uuid", (event, data) => {
    document.getElementById("code").innerHTML = data;
  });
};

startBtn.addEventListener("click", () => {
  ipcRenderer.send("start-casting", {});
  startBtn.style.display = "none";
  stopBtn.style.display = "block";
});

stopBtn.addEventListener("click", () => {
  ipcRenderer.send("stop-casting", {});
  startBtn.style.display = "block";
  stopBtn.style.display = "none";
});
