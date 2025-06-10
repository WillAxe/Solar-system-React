const moonService = require("../service/moonService")

exports.getMoons = async (req, res) => {
  try {
    const moons = await moonService.getMoons()
    res.json({ moons })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.getMoon = async (req, res) => {
  const { moonname } = req.params
  console.log("params" + moonname)
  try {
    const moon = await moonService.getMoon(moonname)
    res.json({ moon })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}
