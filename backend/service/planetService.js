const connectionMySQL = require("../connectionMySQL")

function getPlanets() {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM Planets"
    connectionMySQL.query(sql, (err, rows) => {
      if (err) reject(err)
      else {
        resolve(rows)
      }
    })
  })
}

function getPlanet(planetname) {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM Planets WHERE PlanetName = ?"
    connectionMySQL.query(sql, [planetname], (err, rows) => {
      if (err) reject(err)
      else {
        resolve(rows)
      }
    })
  })
}

module.exports = {
  getPlanets,
  getPlanet,
}
