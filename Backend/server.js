import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import connectDb from "./db/connect.js"
import UserRoutes from "./routes/UserRoutes.js"
import CompanyRoutes from "./routes/CompanyRoutes.js"
import jobRoutes from "./routes/jobRoutes.js"
import cors from "cors"


const app = express()
dotenv.config()
connectDb()
app.use(cors());
const port = process.env.PORT || 3000

app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/api/users",UserRoutes)
app.use("/api/company",CompanyRoutes)
app.use("/api/job",jobRoutes)


app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`)
})