
const express = require("express")
const app = express()
const PORT = 3001

const fs = require("fs")
const path = require("path")
const pathToFile = path.resolve("./data.json")


app.get("/", (req, res) => {
    res.send("Hello Word")

})
app.get("/api/resources", (req, res) => {
    const stringifiedData = fs.readFileSync(pathToFile)
    const Resources = JSON.parse(stringifiedData)
    res.send(Resources)

})

app.listen(PORT, () => {
    console.log("Server is listening on port:" + PORT)
})