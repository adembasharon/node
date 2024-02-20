const express=require("express")
const mongoose=require("mongoose")
const dotenv = require("dotenv");
const cors=require("cors")
const userRoutes=require("./routes/items")

const app=express()

dotenv.config()

const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DBconnected")
    })
    .catch((err) => {
        console.log(err)
    })
app.listen(PORT, () => {
    console.log(`sever is running on ${PORT}`)
});

const corsOptions = {
    "Access-Control-Allow-Origin": "*"
}

app.use(cors(corsOptions))

app.get("/", (req, res) => {
    res.send("Welcome to the API")
})

app.use(express.json());

app.use("/api",userRoutes)