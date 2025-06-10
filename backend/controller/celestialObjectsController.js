const celestialObjectsService = require("../service/celestialObjectsService")
exports.getCelestialObjects = async (req, res) => {
  try {
    const celestialObjects = await celestialObjectsService.getCelestialObjects()
    res.json({ celestialObjects })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.getCelestialObject = async (req, res) => {
  const { objectname } = req.params
  try {
    const celestialObject = await celestialObjectsService.getCelestialObject(
      objectname
    )
    res.json({ celestialObject })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}
