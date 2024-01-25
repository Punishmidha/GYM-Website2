// Synchronous or blocking
// isme line by line execution hoga


// Asynchronous or non-blocking
// line by line execution not guranteed ...call back will fire

const fs = require("fs");
let text = fs.readFile("dele.txt","utf-8",(err,data)=>
{
    console.log(err,data);
});
console.log("This is a message"); 