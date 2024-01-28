const { spawn } = require("child_process");
const array = [57, 1, 0, 130, 131, 0, 1, 115, 1, 1.2, 1, 1, 0];
let data1;

const child = spawn('python', ["-B",'prediction.py', array]);

child.stdout.on("data", (data) => {
    data1 = data.toString();
    console.log(data1);
});

child.stderr.on("data", (error) => {
    console.error(`Error: ${error}`);
});

child.on("close", (code) => {
    console.log(`Child process exited with code ${code}`);
});
