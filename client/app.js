const { app, BrowserWindow, ipcMain } = require("electron");
const { v4: uuidv4 } = require("uuid");
const screenshot = require("screenshot-desktop");
const internalIp = require("ip").address();
const socket = require("socket.io-client")(`http://${internalIp}:5000`);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.removeMenu();
  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("start-casting", (event, args) => {
  const uuid = uuidv4();
  socket.emit("join-message", uuid);
  event.reply("uuid", uuid);
});

ipcMain.on("stop-casting", (event, args) => {});
