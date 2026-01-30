import "../moons.css"
import { useEffect, useState } from "react"
import LinkTo from "./linkTo"
function Moons() {
  const [moon, setMoon] = useState([])
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    // Fetch both moons and planets so that we can display planet names with moons
    Promise.all([
      fetch("https://memoar.nu/api/moons").then((res) => res.json()),
      fetch("https://memoar.nu/api/planets").then((res) => res.json()),
    ]).then(([moonsData, planetsData]) => {
      setMoon(moonsData.moons)
      setPlanets(planetsData.planets)
    })
  }, [])

  const getPlanetName = (planetId) => {
    const planet = planets.find((p) => p.planetid === planetId)
    return planet ? planet.planetname : ""
  }

  return (
    <>
      <main className="moons-container">
        <h1 className="moons-title">Moons of the Solar system</h1>
        <div className="moons-grid">
          {moon.map((moons) => (
            <section className="moon-section" key={moons.moonname}>
              <h2>{`${moons.moonname}`}</h2>
              <h3>{getPlanetName(moons.moonplanetid)}</h3>
              <LinkTo body={moons} bodies="moons"></LinkTo>
            </section>
          ))}
        </div>
      </main>
    </>
  )
}
export default Moons
