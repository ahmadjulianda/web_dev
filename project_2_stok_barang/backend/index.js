import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import stokRoute from "./routes/stokRoute.js"

dotenv.config()

const app=express()

app.use(cors())
app.use(express.json())
app.use('/',stokRoute)

const PORT=8000
app.listen(PORT, () => {
    console.log("server berjalan di port 8000");
})