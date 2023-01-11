const path = require("path")
const express = require("express")
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set("view engine", "ejs")
// console.log(__dirname)
app.set('views', path.join(__dirname, "views"))

app.get("/", (req, res) => {
    res.render("index", { text: "World" })
})

const userRouter = require("./routes/users")

app.use("/users", userRouter)

app.listen(3000)
