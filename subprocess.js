process.on("message", (m, server) => {
    if (m === "server") {
        server.on("connection", socket => {
            console.log("child....");
            socket.end("handled by child");
        });
    }
});
