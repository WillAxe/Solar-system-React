const connectionMySQL = require("../connectionMySQL")

function getCelestialObjects() {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM CometsAndAsteroids"
    connectionMySQL.query(sql, (err, rows) => {
      if (err) reject(err)
      else {
        resolve(rows)
      }
    })
  })
}

function getCelestialObject(ObjectName) {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM CometsAndAsteroids WHERE ObjectName = ?"
    connectionMySQL.query(sql, [ObjectName], (err, rows) => {
      if (err) reject(err)
      else {
        resolve(rows)
      }
    })
  })
}

module.exports = {
  getCelestialObjects,
  getCelestialObject,
}
