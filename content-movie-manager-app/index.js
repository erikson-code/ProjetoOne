
const express = require("express")
const app = express()
const PORT = 3001



const fs = require("fs")
const path = require("path")
const pathToFile = path.resolve("./data.json")
const getResources = () => JSON.parse(fs.readFileSync(pathToFile))
app.use(express.json()) //req.body transform thing that undefined for json


app.get("/", (req, res) => {
    res.send("Hello Word")

})

app.patch('/api/resources/:id', (req, res) => {


    const resources = getResources();

    const { id } = req.params

    const index = resources.findIndex(resource => resource.id === id)

    const activeResource = resources.find(resource => resource.status === "active")

    if (resources[index].status === "complete")
        return res.status(422).send("Cannot update because resource is complete")

    resources[index] = req.body
    
    //Active resource related functionality
    if (req.body.status === "active") {

        if (activeResource) {
            return res.status(422).send("There is active resource already!")
        }
        resources[index].status = "active"

        resources[index].activationTime = new Date()

    }



    fs.writeFile(pathToFile, JSON.stringify(resources, null, 2), (error) => {
        if (error) {
            return res.status(422).send("Cannot store data in the file!")
        }

        return res.send("Data has been updated!")
    })

})


app.get('/api/resources/:id', (req, res) => {

    const resources = getResources();

    const { id } = (req.params)

    const resource = resources.find(resource => resource.id === id)

    res.send(resource)




})

app.get("/api/activeresource", (req, res) => {
    const resources = getResources()
    const activeResource = resources.find((resource) => resource.status === "active")
    res.send(activeResource)
})


app.get("/api/resources", (req, res) => {
    const stringifiedData = fs.readFileSync(pathToFile)
    const Resources = JSON.parse(stringifiedData)
    res.send(Resources)

})

app.post("/api/resources", (req, res) => {
    const resources = getResources()
    const resource = req.body

    resource.createdAt = new Date();
    resource.status = "Inactive"
    resource.id = Date.now().toString()

    resources.unshift(resource)

    fs.writeFile(pathToFile, JSON.stringify(resources, null, 2), (error) => {
        if (error) {
            return res.status(422).send("Cannot store data in the file!")
        }

        return res.send("Data has been saved!")
    })




})

app.listen(PORT, () => {
    console.log("Server is listening on port:" + PORT)
})