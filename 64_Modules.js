// kisi or ki likhi hui cheez ham use  kR rahe h known as built in modules ..google se dekh lo kon kon se hai

const fs = require("fs");
let text = fs.readFileSync("dele.txt","utf-8");
text = text.replace("browser" , "rohan");
console.log(text); 
console.log("hello");

console.log("Creating a new file: "); 
fs.writeFileSync("rohan.txt", text);
