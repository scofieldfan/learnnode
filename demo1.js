const http = require("http");
const util = require("./util.js");
// 工作进程可以共享任何 TCP 连接。
// 在本例子中，共享的是一个 HTTP 服务器。
http
    .createServer((req, res) => {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.writeHead(200);
        res.end("你好世界\n" + util.compute());
    })
    .listen(8000);
