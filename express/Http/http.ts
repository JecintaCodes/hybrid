import http, { ServerResponse } from "http"

const Server = http.createServer((req:http.IncomingMessage,
    res:ServerResponse<http.IncomingMessage>)=>{

        res.write("I am Responding")
        res.end() 
    })


Server.on("connection", ()=>{
    console.log("Server is on");
})

Server.listen(3000, ()=>{
    console.log("Server is listening");
})