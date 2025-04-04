import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())
//db connection
connectDB();
//API END POINT
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get('/',(req,res)=>{
    res.send("API WORKING")
})
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)

})
//mongodb+srv://project:project1@cluster0.z68mj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0