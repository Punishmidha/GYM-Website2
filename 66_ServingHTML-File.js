// server bnayege khud se
const http = require('http')
const fs = require('fs')
const fileContent =  fs.readFileSync('61_MathObject.html')

const server = http.createServer((req,res)=>
{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent)
})

// ye hmara host h jese he ham ye 127.0.0.1 seaarch kre ge chrome pe to hmara server khul jega 

// agar 80 ki jgah 8000 krte to 127.0.0.1:8000 is se open hota server
server.listen(80,'127.0.0.1' , ()=> {
    console.log("Listening on port 80")
})
