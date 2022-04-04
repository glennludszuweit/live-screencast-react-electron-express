const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const port = process.env.PORT || 5000;

app.get("/view", (req, res) => {
  res.sendFile(`${__dirname}/screen.html`);
});

io.on("connection", (socket) => {
  socket.on("join-message", (name) => {
    socket.join("1620");
    console.log(`${name} has arrived!`);
  });
});

http.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
