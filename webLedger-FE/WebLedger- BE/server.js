require("dotenv").config()
const express = require("express");
const connectDB = require("./database/db");
const path = require("path");
const error_middleware = require("./middlewares/error.middleware");
const authRoute = require("./routers/auth.route");
const cors = require("cors")


const app = express();

app.use(cors())

app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// ! routes 
app.use("/api/auth", authRoute)



//  ! handling error part
app.use((req, res) => {
    res.sendFile(path.join(__dirname, "views", "404.ejs"))
})
app.use(error_middleware)


// ! connecting and listeing part
const PORT = process.env.PORT;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`⚙️ Server is listening at  http://localhost:${PORT}/`);
    })
})

