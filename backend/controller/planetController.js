const planetService = require("../service/planetService")

exports.getPlanets = async (req, res) => {
  try {
    const planets = await planetService.getPlanets()
    res.json({ planets })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.getPlanet = async (req, res) => {
  const { planetname } = req.params
  console.log("param" + planetname)
  try {
    const planet = await planetService.getPlanet(planetname)
    res.json({ planet })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}
