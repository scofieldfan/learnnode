process.on("message", (m, socket) => {
    if (m === "socket") {
        if (socket) {
            // Check that the client socket exists.
            // It is possible for the socket to be closed between the time it is
            // sent and the time it is received in the child process.
            socket.end(`Request handled with ${process.argv[2]} priority`);
        }
    }
});
