const celestialObjectsController = require("../controller/celestialObjectsController")
const express = require("express")
const router = express.Router()

router.get("/celestialobjects", celestialObjectsController.getCelestialObjects)
router.get(
  "/celestialobjects/:objectname",
  celestialObjectsController.getCelestialObject
)

module.exports = router
