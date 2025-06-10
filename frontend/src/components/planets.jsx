import { useEffect, useState } from "react"
import "../planets.css"
import { Link } from "react-router-dom"
import LinkTo from "./linkTo"
function Planets() {
  const [planet, setPlanet] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/api/planets")
      .then((response) => response.json())
      .then((result) => {
        // console.log(result)
        setPlanet(result.planets)
      })
  }, [])

  return (
    <>
      <main className="planets-container">
        {planet.map((planet) => (
          <section className="planet-section" key={planet.PlanetID}>
            <h2>{`${planet.PlanetName}`}</h2>
            <img
              className="planet-image"
              src={`../images/${planet.PlanetName}.jpg`}
              alt={`image of ${planet.PlanetName}`}
            />
            <LinkTo body={planet} bodies="planets"></LinkTo>
          </section>
        ))}
      </main>
    </>
  )
}

export default Planets
