import express  from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";


const app = express()
dotenv.config();


const port = process.env.PORT || 3030;

app.use(express.json())
app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    connectToMongoDB()
    console.log(`Example app listening on port ${port}`)
})