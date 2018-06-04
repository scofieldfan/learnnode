const subprocess = require("child_process").fork("subprocess.js");

// Open up the server object and send the handle.
const server = require("net").createServer();
server.on("connection", socket => {
    console.log("parent....");
    socket.end("handled by parent");
});
server.listen(3000, () => {
    subprocess.send("server", server);
});
