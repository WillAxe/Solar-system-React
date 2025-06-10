const connectionMySQL = require("../connectionMySQL")

function getMoons() {
  return new Promise((resolve, reject) => {
    let sql =
      "SELECT Moons.MoonName , Planets.PlanetName FROM Moons INNER JOIN Planets ON Moons.MoonPlanetID = Planets.PlanetID"
    connectionMySQL.query(sql, (err, rows) => {
      if (err) reject(err)
      else resolve(rows)
    })
  })
}

function getMoon(moonname) {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM Moons WHERE MoonName = ?"
    connectionMySQL.query(sql, [moonname], (err, rows) => {
      if (err) reject(err)
      else resolve(rows)
    })
  })
}

module.exports = {
  getMoons,
  getMoon,
}
