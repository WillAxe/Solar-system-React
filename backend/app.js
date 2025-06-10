require("dotenv").config()

const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const planetRoutes = require("./routes/planetRoutes")
const moonRoutes = require("./routes/moonRoutes")
const celestialObjectsRoutes = require("./routes/celestialObjectsRoutes")
app.use("/api", planetRoutes)
app.use("/api", moonRoutes)
app.use("/api", celestialObjectsRoutes)

app.listen(port, () => {
  console.log(`Connection successful on port ${port}!`)
})
