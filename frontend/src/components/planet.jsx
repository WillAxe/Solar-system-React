import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../planets.css"
function Planet() {
  const { planetname } = useParams()
  const [planet, setPlanet] = useState(null)
  useEffect(() => {
    fetch(`http://localhost:3000/api/planets/${planetname}`)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.planet)
        setPlanet(result.planet[0])
      })
  }, [planetname])
  return (
    <>
      <main>
        <section>
          <table>
            <thead>
              <tr>
                <th>Planet</th>
                <th>Type of Planet</th>
                <th>Distance from the sun</th>
                <th>Mass</th>
                <th>Rings</th>
                <th>Number of moons</th>
              </tr>
            </thead>
            <tbody>
              {planet !== null && (
                <tr className="planet-row">
                  <td>{`${planet.PlanetName}`}</td>
                  <td>{`${planet.PlanetType}`}</td>
                  <td>{`${planet.DistanceFromSun} AU`}</td>
                  <td>{`${planet.Mass} kg`}</td>
                  <td>{`${planet.HasRings === 0 ? "no" : "yes"}`}</td>
                  <td> {`${planet.Moons}`}</td>
                </tr>
              )}
            </tbody>
          </table>
          <p className="note">Note: 1 AU is approximately 149.6 million km</p>
        </section>
      </main>
    </>
  )
}
export default Planet
