const cp = require("child_process");
const ls = cp.spawn("ls", ["-lh", "/usr"]);
ls.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
});

ls.on("close", code => {
    console.log(`child process exited with code ${code}`);
});

/*
cp.exec("ls", (err, stdout, stderr) => {
    console.log(stdout);
});
cp.execFile("child.js", (err, stdout, stderr) => {
    console.log("child:", stdout);
});
 cp.fork("child.js");
 */
