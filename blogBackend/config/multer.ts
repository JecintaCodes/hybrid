import multer from "multer"
import path from "path"

const stotage = milter.diskStorage({
    destination: (req: any, file: any, cb: any)=> {
        cb(null, file.filIdname)+ "_" + Math.round(Math.random)
    }
})