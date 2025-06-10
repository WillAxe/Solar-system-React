const express = require("express")
const router = express.Router()
const moonController = require("../controller/moonController")

router.get("/moons", moonController.getMoons)
router.get("/moons/:moonname", moonController.getMoon)

module.exports = router
