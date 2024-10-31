const mongoose = require("mongoose")

const Set07DB = "mongodb://127.0.0.0:27017/Set07Database"


const set07Data = async()=>{
    try {
       const dbconnect = await mongoose.connect(Set07DB) 
       console.log("connected");
       console.log("");
    } catch (error) {
        console.log("not connected");
    }
}

// mongoose.connect(Set07DB).then(()=>{
//     console.log(`db is connected`);
// }).catch((err)=>{
//     console.log(err);
// })
// module.exports = mongoose