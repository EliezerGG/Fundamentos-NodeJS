const { exec, spawn } = require('child_process')

exec('dir', (err, stdout, sterr)=>{
    if (err){
        console.error(err)
        return false
    }
    console.log(stdout)
})

const proceso = spawn('ls', ['-lh', '/usr'])

proceso.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

proceso.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

proceso.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});