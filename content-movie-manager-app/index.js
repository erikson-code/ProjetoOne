
const express = require("express")
const app = express()
const PORT = 3001

const fs = require("fs")
const path = require("path")
const pathToFile = path.resolve("./data.json")
const getResources = ()=> JSON.parse(fs.readFileSync(pathToFile))
app.use(express.json()) //req.body transform thing that undefined for json


app.get("/", (req, res) => {
    res.send("Hello Word")

})
app.get("/api/resources", (req, res) => {
    const stringifiedData = fs.readFileSync(pathToFile)
    const Resources = JSON.parse(stringifiedData)
    res.send(Resources)

})

app.post("/api/resources", (req, res) => {
    const resources = getResources()
    console.log("Data has to POST endpoint")
    console.log(req.body)
    res.send("Data has been received")

})

app.listen(PORT, () => {
    console.log("Server is listening on port:" + PORT)
})