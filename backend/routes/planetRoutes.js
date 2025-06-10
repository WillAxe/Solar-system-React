const express = require("express")
const router = express.Router()
const planetController = require("../controller/planetController")

router.get("/planets", planetController.getPlanets)
router.get("/planets/:planetname", planetController.getPlanet)

module.exports = router
