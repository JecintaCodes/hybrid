import http, { ServerResponse } from "http"

const Server = http.createServer((req:http.IncomingMessage,res:ServerResponse<http.IncomingMessage>)=>{
    res.write(" i am writing to the body")
    res.end()
})

Server.on("connection", ()=>{
    console.log("Server is on");
})

Server.listen(3000, ()=>{
    console.log("Server is up and listening")
})