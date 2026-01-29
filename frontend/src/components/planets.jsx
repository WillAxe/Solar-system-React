import { useEffect, useState } from "react"
import "../planets.css"
import { Link } from "react-router-dom"
import LinkTo from "./linkTo"
function Planets() {
  const [planet, setPlanet] = useState([])
  useEffect(() => {
    fetch("https://memoar.nu/api/planets")
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setPlanet(result.planets)
      })
  }, [])

  return (
    <>
      <main className="planets-container">
        {planet.map((planet) => (
          <section className="planet-section" key={planet.planetid}>
            <h2>{`${planet.planetname}`}</h2>
            <img
              className="planet-image"
              src={`Solar-system-React/images/${planet.planetname}.jpg`}
              alt={`image of ${planet.planetname}`}
            />
            <LinkTo body={planet} bodies="planets"></LinkTo>
          </section>
        ))}
      </main>
    </>
  )
}

export default Planets
